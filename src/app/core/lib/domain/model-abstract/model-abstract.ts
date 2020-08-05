/**
 * @packageDocumentation
 * @module CoreModule/lib
 * @author luchik
 */
/** */

// import { Regexp } from '@app-core/lib/utils/regexp/regexp.enum';

/**
 * Entity Abstract Model
 */
export abstract class ModelAbstract {
    public abstract $type: string = 'ModelAbstract';

    /**
     * Flag is model busy
     */
    public $busy: boolean = false;

    /**
     * Errors list
     */
    protected $errors: Object = {};

    /**
     * History object contains initially set values in format {field_name: field_initial_value}
     */
    protected $updatedFields: any = {};

    /**
     * remove all properties with 'id' in entity
     */
    public static clone(entityData: any) {
        let key: string, i: number;
        if (!entityData) {
            return entityData;
        }

        switch (typeof entityData) {
            case 'object':
                if (entityData instanceof Array) {
                    for (i = 0; i < entityData.length; i++) {
                        entityData[i] = ModelAbstract.clone(entityData[i]);
                    }
                    break;
                }
                for (key in entityData) {
                    if (!entityData.hasOwnProperty(key)) {
                        continue;
                    }
                    if (RegExp('(^id$)|([_]id[s]?)$').test(key)) {
                        delete entityData[key];
                        continue;
                    }
                    entityData[key] = ModelAbstract.clone(entityData[key]);
                }
                break;
        }
        return entityData;
    }

    /**
     * Constructor
     *
     * Abstract constructor looks like:
     * ```
     *     constructor(data: any = null) {
     *         this._updateValue(data, true);
     *     }
     * ```
     * In child classes we should go with rewrite of the setter to make `this._updateValue` to be applied for current class.
     * But in the same time we shouldn't miss `super();`
     * That's why to support parent constructor and not miss data setting to current class we are using
     * ```
     *     constructor(data: any = null) {
     *         super();
     *         this._updateValue(data, true);
     *     }
     * ```
     * If `super()` will not be called, the initial abstract (parent) class variables will not be initiated
     */
    constructor() { }

    /**
     * Update fields
     * @param any data Object in format {field: value} to be set to current class
     * @param boolean is_history_rewrite If true history initial value will be set to current one
     */
    public updateFields(data: any, isHistoryRewrite: boolean = true) {
        this._updateValue(data, isHistoryRewrite);
    }

    /**
     * Get Updated fields
     */
    public getRequestFields(includeFields: Array<string> = [], excludeFields: Array<string> = []): any {
        return this._getUpdatedFields(includeFields, excludeFields);
    }

    /**
     * Go with each Updated field
     */
    public forEachRequestFields(
        fn: ((key: string, item: any, requestData: any) => void),
        includeFields: Array<string> = [],
        excludeFields: Array<string> = []
    ): void {
        const requestData: any = this._getUpdatedFields(includeFields, excludeFields);
        let key: string;

        for (key in requestData) {
            if (!requestData.hasOwnProperty(key)) {
                continue;
            }
            fn(key, requestData[key], requestData);
        }
    }

    /**
     * Set error
     * @param string field_name Field name
     * @param string error_message Error message
     * @returns void
     */
    protected setError(field_name: string, error_message: string) {
        this._setError(field_name, error_message);
    }

    /**
     * Set errors
     * @param string field_name Field name
     * @param Array<string> error_message Error messages list
     * @returns void
     */
    protected setErrors(field_name: string, error_messages: Array<string>) {
        const self: any = this;
        if (!error_messages) {
            return;
        }
        error_messages.forEach(function (error_message) {
            self._setError(field_name, error_message);
        });
    }

    /**
     * Get error
     * @param string field_name If defined only errors for the field will be shown
     * @returns Array[string]|Object
     */
    protected getErrors(field_name?: string) {
        if ('undefined' === typeof field_name) {
            return this.$errors;
        }
        if (!this.$errors.hasOwnProperty(field_name)) {
            return [];
        }
        return this.$errors[field_name];
    }

    /**
     * Update field value
     * @param any data Object in format {field: value} to be set to current class
     * @param boolean is_history_rewrite If true history initial value will be set to current one
     */
    protected _updateValue(data: any, isHistoryRewrite: boolean = false) {
        let field_name: string;

        if (!data || 'object' !== typeof data) {
            return;
        }
        for (field_name in data) {
            if (!data.hasOwnProperty(field_name)) {
                continue;
            }
            // if (!this.hasOwnProperty(field_name)) {
            //     continue;
            // }
            this[field_name] = data[field_name];

            // Set initial value to history object.
            // History object contains initially set values in format {field_name: field_initial_value}
            if (!isHistoryRewrite) {
                continue;
            }
            this.$updatedFields[field_name] = data[field_name];
        }
    }

    /**
     * Get Updated fields
     */
    protected _getUpdatedFields(includeFields: Array<string> = [], excludeFields: Array<string> = []): any {
        const requestData: any = {}, that = this;
        let key: string;
        if (includeFields.length) {
            includeFields.forEach((otherKey: string) => {
                if ('undefined' === typeof that[otherKey]) {
                    return;
                }
                requestData[otherKey] = that[otherKey];
            });
        }

        for (key in this.$updatedFields) {
            if (!this.$updatedFields.hasOwnProperty(key)) {
                continue;
            }
            if ('undefined' === typeof this.$updatedFields[key]) {
                continue;
            }
            if (excludeFields.includes(key)) {
                continue;
            }
            requestData[key] = this.$updatedFields[key];
        }
        return requestData;
    }

    /**
     * Set error
     * @param string field_name Field name
     * @param string error_message Error message
     * @param string error_type Error type
     * @returns void
     */
    protected _setError(field_name: string, error_message: string) {
        if (!this.$errors.hasOwnProperty(field_name)) {
            this.$errors[field_name] = [];
        }
        this.$errors[field_name].push(error_message);
    }

}
