/**
 * @packageDocumentation
 * @module modules/OrganisationManageModule
 * @author luchik
 */
/** */

import {
    EntityFormDataMapperAbstract,
    EntityFormDataMapperInterface
} from '@app-shared/ui/domain/form-component-abstract/entity-form-data-mapper';
import { OrganisationInterface } from '@app-core/domain/models/organisation-entity/organisation-interface';

/**
 * Common form interface
 */
export class OrganisationFormDataMapper extends EntityFormDataMapperAbstract implements EntityFormDataMapperInterface {
    /**
     * Convert entity/entity interface to form data
     * @params any entityData
     * @params Array<string> fieldsList
     * @returns any
     */
    public toFormData(entityData: OrganisationInterface, fieldsList: Array<string>, defaultFormData: any = {}): any {
        const formData: any = {};

        if (!entityData) {
            entityData = null;
        }
        if (!defaultFormData) {
            defaultFormData = {};
        }
        if (!fieldsList) {
            fieldsList = [];
        }

        fieldsList.forEach((formControlName: string) => {
            if ('undefined' !== typeof defaultFormData[formControlName]) {
                formData[formControlName] = defaultFormData[formControlName];
            }
            switch (formControlName) {
                default:
                    if ('undefined' === typeof formData[formControlName]) {
                        formData[formControlName] = '';
                    }
                    if (!entityData[formControlName]) {
                        break;
                    }
                    formData[formControlName] = entityData[formControlName];
                    break;
            }
        });

        return formData;
    }

    /**
     * Convert form data to entity interface
     * @params any formData
     * @returns any
     */
    public toEntityData(formData: any, initialEntityData: any = {}, defaultEntityData: any = {}): any {
        if (!formData) {
            formData = {};
        }
        if (!initialEntityData) {
            initialEntityData = {};
        }
        if (!defaultEntityData) {
            defaultEntityData = {};
        }

        const entityData: any = Object.assign({}, formData);

        if (initialEntityData.id) {
            entityData.id = initialEntityData.id;
        }

        Object.keys(formData).forEach((formControlName: string) => {
            switch (formControlName) {
                default:
                    entityData[formControlName] = formData[formControlName];
                    break;
            }
        });

        return entityData;
    }
}
