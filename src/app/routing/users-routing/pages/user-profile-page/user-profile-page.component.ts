/**
 * @packageDocumentation
 * @module routing/UsersRoutingModule
 * @author luchik
 */
/** */

// Angular dependencies
import { Component, OnInit } from '@angular/core';

// Core Domain
import { UserEntity } from '@app-core/domain/models/user-entity/user-entity';

// Core Infrastructure
import { ResponseError } from '@app-core/infrastructure/request/response-error/response-error';

// Core Services
import { UserCoreService } from '@app-core/services/user-core/user-core.service';

/**
 * User profile component
 */
@Component({
    selector: 'app-user',
    templateUrl: './user-profile-page.component.html',
    styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {
    public user: UserEntity;

    constructor(
        private userCoreService: UserCoreService,
    ) { }

    ngOnInit(): void {
        this.userCoreService.getUserById(1)
            .subscribe({
                next: (user: UserEntity) => {
                    this.user = user;
                },
                error: (error: ResponseError) => {
                    this.user = null;
                }
            })
    }
}
