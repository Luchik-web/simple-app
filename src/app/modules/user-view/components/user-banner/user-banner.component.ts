/**'
 * @packageDocumentation
 * @module modules/UserViewModule
 * @author luchik
 */
/** */

import { Component, Input, OnInit } from '@angular/core';

// Core Domain
import { UserInterface } from '@app-core/domain/models/user-entity/user-interface';

/**
 * Milestone Def Extarnal Link Form component
 */
@Component({
    selector: 'app-modules-user-view-user-banner',
    templateUrl: './user-banner.component.html',
    styleUrls: ['./user-banner.component.scss']
})
export class UserBannerComponent implements OnInit {

    @Input() public user: UserInterface;

    constructor() {
    }

    /**
     * Triggers on Component initiation
     */
    ngOnInit() {
    }

}
