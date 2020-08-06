/**
 * @packageDocumentation
 * @module CoreModule/domain
 * @author luchik
 */
/** */

// Core npm dependenciew
import { Injectable } from '@angular/core';

// Core lib
import { FactoryAbstract } from '@app-core/lib/domain/factory-abstract/factory-abstract.service';

// Core Domain
import { OrganisationEntity } from '@app-core/domain/models/organisation-entity/organisation-entity';

/**
 * Organisations factory
 */
@Injectable({
    providedIn: 'root'
})
export class OrganisationFactory extends FactoryAbstract {

    /**
     * Constructor of the class
     */
    constructor(
    ) {
        super();
    }

    /**
     * Create from single response
     * @param any entityData
     * @returns OrganisationEntity
     */
    public create(entityData: any) {
        return this._create(entityData);
    }

    /**
     * Create from single response
     * @param any entityData
     * @returns OrganisationEntity
     */
    private _create(entityData: any) {
        let organisation: OrganisationEntity;
        if (!entityData) {
            return null;
        }
        organisation = new OrganisationEntity(entityData);
        return organisation;
    }
}
