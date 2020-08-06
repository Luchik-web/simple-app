/**'
 * @packageDocumentation
 * @module modules/OrganisationViewModule
 * @author luchik
 */
/** */

import { Component, Input, OnInit } from '@angular/core';

// Core Domain
import { OrganisationInterface } from '@app-core/domain/models/organisation-entity/organisation-interface';

/**
 * Milestone Def Extarnal Link Form component
 */
@Component({
    selector: 'app-modules-organisation-view-organisation',
    templateUrl: './organisation.component.html',
    styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit {

    @Input() public organisation: OrganisationInterface;

    constructor() {
    }

    /**
     * Triggers on Component initiation
     */
    ngOnInit() {
    }

}
