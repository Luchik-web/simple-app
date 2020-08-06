/**
 * @packageDocumentation
 * @module routing/ManageOrganisationsRoutingModule
 * @author luchik
 */
/** */

// Angular dependencies
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Core Domain
import { OrganisationEntity } from '@app-core/domain/models/organisation-entity/organisation-entity';
import { OrganisationInterface } from '@app-core/domain/models/organisation-entity/organisation-interface';

// Core Infrastructure
import { ResponseError } from '@app-core/infrastructure/request/response-error/response-error';
import { EntitySignalInterface } from '@app-core/lib/signals/entity-signal-interface';

// Core Services
import { OrganisationCoreService } from '@app-core/services/organisation-core/organisation-core.service';

/**
 * Edit Form
 */
@Component({
    selector: 'app-routing-manage-organisation-manage-organisation-page',
    templateUrl: './manage-organisation-page.component.html',
    styleUrls: ['./manage-organisation-page.component.scss']
})
export class ManageOrganisationPageComponent implements OnInit {
    /**
     * Initial Organisation Data
     */
    public organisation: OrganisationInterface;

    constructor(
        private organisationCoreService: OrganisationCoreService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    /**
     * Initiate base data: load Organisation
     */
    ngOnInit(): void {
        this.route.params
            .subscribe(params => {
                const organisationId = +params['organisationId'];
                if (organisationId) {
                    this.getOrganisationById(organisationId);
                } else {
                    this.organisation = null;
                }
            });
    }

    getOrganisationById(organisationId: number): void {
        this.organisationCoreService.getOrganisationById(1)
            .subscribe({
                next: (organisation: OrganisationEntity) => {
                    this.organisation = organisation;
                },
                error: (error: ResponseError) => {
                    this.organisation = null;
                }
            });
    }

    /**
     * React on Organisation Changed
     */
    public onWhenOrganisationChanged($event: EntitySignalInterface) {
        if (this.organisation && this.organisation.id) {
            this.router.navigate([`/organisations/preview/${this.organisation.id}`]);
        }
    }

}
