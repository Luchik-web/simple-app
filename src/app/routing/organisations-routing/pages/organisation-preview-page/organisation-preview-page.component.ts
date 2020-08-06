/**
 * @packageDocumentation
 * @module routing/OrganisationsRoutingModule
 * @author luchik
 */
/** */

// Angular dependencies
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Core Domain
import { OrganisationEntity } from '@app-core/domain/models/organisation-entity/organisation-entity';

// Core Infrastructure
import { ResponseError } from '@app-core/infrastructure/request/response-error/response-error';

// Core Services
import { OrganisationCoreService } from '@app-core/services/organisation-core/organisation-core.service';

/**
 * Organisation profile component
 */
@Component({
    selector: 'app-organisation',
    templateUrl: './organisation-preview-page.component.html',
    styleUrls: ['./organisation-preview-page.component.scss']
})
export class OrganisationPreviewPageComponent implements OnInit {
    public organisation: OrganisationEntity;

    constructor(
        private organisationCoreService: OrganisationCoreService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.params
            .subscribe(params => {
                const organisationId = +params['organisationId'];
                this.getOrganisationById(organisationId);
            });

    }

    getOrganisationById(organisationId: number): void {
        this.organisationCoreService.getOrganisationById(organisationId)
            .subscribe({
                next: (organisation: OrganisationEntity) => {
                    this.organisation = organisation;
                },
                error: (error: ResponseError) => {
                    this.organisation = null;
                }
            })
    }
}
