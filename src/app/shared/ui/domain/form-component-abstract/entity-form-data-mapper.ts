/**
 * @packageDocumentation
 * @module shared/UiModule
 * @author luchik
*/
/** */

/**
 * Common form interface
 */
export interface EntityFormDataMapperInterface {
    /**
     * Convert entity/entity interface to form data
     * @params any entityData
     * @params Array<string> fieldsList
     * @returns any
     */
    toFormData(entityData: any, fieldsList: Array<string>, defaultFormData: any): any;
    /**
     * Convert form data to entity interface
     * @params any formData
     * @returns any
     */
    toEntityData(formData: any, initialEntityData?: any, defaultEntityData?: any, fieldsList?: Array<string>): any;
}

/**
 * Common form interface
 */
export abstract class EntityFormDataMapperAbstract {
    /**
     * Convert entity/entity interface to form data
     * @params any entityData
     * @params Array<string> fieldsList
     * @returns any
     */
    abstract toFormData(entityData: any, fieldsList?: Array<string>, defaultFormData?: any): any;
    /**
     * Convert form data to entity interface
     * @params any formData
     * @returns any
     */
    abstract toEntityData(formData: any, initialEntityData?: any, defaultEntityData?: any, fieldsList?: Array<string>): any;
}

/**
 * Common form interface
 */
export class EntityFormDataMapper extends EntityFormDataMapperAbstract implements EntityFormDataMapperInterface {
    /**
     * Convert entity/entity interface to form data
     * @params any entityData
     * @params Array<string> fieldsList
     * @returns any
     */
    public toFormData(entityData: any, fieldsList: Array<string>, defaultFormData: any = {}): any {
        const formData: any = {};

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
                        return;
                    }
                    formData[formControlName] = entityData[formControlName];
                    break;
            }
        });

        // tslint:disable-next-line: no-var-before-return
        return formData;
    }

    /**
     * Convert form data to entity interface
     * @params any formData
     * @returns any
     */
    public toEntityData(
        formData: any,
        initialEntityData?: any,
        defaultEntityData?: any,
        fieldsList?: Array<string>,
    ): any {
        const entityData: any = Object.assign({}, formData);

        // tslint:disable-next-line: no-var-before-return
        return entityData;
    }
}
