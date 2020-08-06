/**
 * @packageDocumentation
 * @module CoreModule/services
 * @author luchik
 */
/** */

import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// Core Domain
import { OrganisationInterface } from '@app-core/domain/models/organisation-entity/organisation-interface';
import { OrganisationEntity } from '@app-core/domain/models/organisation-entity/organisation-entity';
import { OrganisationFactory } from '@app-core/domain/factories/organisation-factory/organisation-factory.service';

// Core Infrastructure
import { RequestAdapterService } from '@app-core/infrastructure/request/request-adapter/request-adapter.service';
import { ResponseError } from '@app-core/infrastructure/request/response-error/response-error';

/**
 * Organisation Application Service
 */
@Injectable({
    providedIn: 'root'
})
export class OrganisationCoreService {

    constructor(
        private organisationFactory: OrganisationFactory,
        private requestAdapter: RequestAdapterService,
    ) { }

    /**
     * Get Organisation by Organisation ID
     *
     * @param number organisationId Organisation ID to load
     * @returns Observable<OrganisationEntity>
     */
    public getOrganisationById(organisationId: number, queryParams: any = {}): Observable<OrganisationEntity> {
        queryParams.id = organisationId;

        return this.requestAdapter.request('organisations.organisations.get_by_id', queryParams)
            .pipe(
                switchMap((response: any) => {
                    let organisation: OrganisationEntity;
                    if (!response) {
                        return throwError(ResponseError.newFromConfig('ENTITY_NOT_EXISTS'));
                    }
                    organisation = this.organisationFactory.create(response);
                    return Observable.of(organisation);
                })
            );
    }

    /**
     * Create new Organisation
     * @param OrganisationInterface organisationData
     * @returns Observable<OrganisationEntity>
     */
    public saveOrganisation(organisationData: OrganisationInterface): Observable<OrganisationEntity> {
        let request: Observable<any>;

        if (organisationData.id) {
            request = this.requestAdapter.request('organisations.organisations.update', organisationData);
        } else {
            request = this.requestAdapter.request('organisations.organisations.create', organisationData);
        }
        request = request
            .map((response: any) => {
                return this.organisationFactory.create(response);
            })
            .catch((errors: any) => {
                return throwError(errors);
            });

        return request;
    }
}
