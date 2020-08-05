/**
 * @packageDocumentation
 * @module routing/ManageUsersRoutingModule
 * @author luchik
 */
/** */

// Angular dependencies
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Core Domain
import { UserEntity } from '@app-core/domain/models/user-entity/user-entity';
import { UserInterface } from '@app-core/domain/models/user-entity/user-interface';

// Core Infrastructure
import { ResponseError } from '@app-core/infrastructure/request/response-error/response-error';
import { EntitySignalInterface } from '@app-core/lib/signals/entity-signal-interface';

// Core Services
import { UserCoreService } from '@app-core/services/user-core/user-core.service';

/**
 * Edit Form
 */
@Component({
    selector: 'app-routing-manage-user-manage-user-page',
    templateUrl: './manage-user-page.component.html',
    styleUrls: ['./manage-user-page.component.scss']
})
export class ManageUserPageComponent implements OnInit {
    /**
     * Initial User Data
     */
    public user: UserInterface;

    constructor(
        private userCoreService: UserCoreService,
        private router: Router,
    ) { }

    /**
     * Initiate base data: load User
     */
    ngOnInit(): void {
        this.userCoreService.getUserById(1)
            .subscribe({
                next: (user: UserEntity) => {
                    this.user = user;
                },
                error: (error: ResponseError) => {
                    this.user = {};
                }
            })
    }

    /**
     * React on User Changed
     */
    public onWhenUserChanged($event: EntitySignalInterface) {
        this.router.navigate(['/users/me']);
    }

}
