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
import { UserInterface } from '@app-core/domain/models/user-entity/user-interface';
import { UserEntity } from '@app-core/domain/models/user-entity/user-entity';
import { UserFactory } from '@app-core/domain/factories/user-factory/user-factory.service';

// Core Infrastructure
import { RequestAdapterService } from '@app-core/infrastructure/request/request-adapter/request-adapter.service';
import { ResponseError } from '@app-core/infrastructure/request/response-error/response-error';

/**
 * User Application Service
 */
@Injectable({
    providedIn: 'root'
})
export class UserCoreService {

    constructor(
        private userFactory: UserFactory,
        private requestAdapter: RequestAdapterService,
    ) { }

    /**
     * Get User by User ID
     *
     * @param number userId User ID to load
     * @returns Observable<UserEntity>
     */
    public getUserById(userId: number, queryParams: any = {}): Observable<UserEntity> {
        queryParams.user_id = userId;

        return this.requestAdapter.request('users.users.get_by_id', queryParams)
            .pipe(
                switchMap((response: any) => {
                    let user: UserEntity;
                    if (!response) {
                        return throwError(ResponseError.newFromConfig('ENTITY_NOT_EXISTS'));
                    }
                    user = this.userFactory.create(response);
                    return Observable.of(user);
                })
            );
    }

    /**
     * Create new User
     * @param UserInterface userData
     * @returns Observable<UserEntity>
     */
    public saveUser(userData: UserInterface): Observable<UserEntity> {
        let request: Observable<any>;

        if (userData.id) {
            request = this.requestAdapter.request('users.users.create', userData);
        } else {
            request = this.requestAdapter.request('users.users.update', userData);
        }
        request = request
            .map((response: any) => {
                return this.userFactory.create(response);
            })
            .catch((errors: any) => {
                return throwError(errors);
            });

        return request;
    }
}
