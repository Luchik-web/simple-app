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
import { UserEntity } from '@app-core/domain/models/user-entity/user-entity';

/**
 * Users factory
 */
@Injectable({
    providedIn: 'root'
})
export class UserFactory extends FactoryAbstract {

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
     * @returns UserEntity
     */
    public create(entityData: any) {
        return this._create(entityData);
    }

    /**
     * Create from single response
     * @param any entityData
     * @returns UserEntity
     */
    private _create(entityData: any) {
        let user: UserEntity;
        if (!entityData) {
            return null;
        }
        user = new UserEntity(entityData);
        return user;
    }
}
