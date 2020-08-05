/**
 * @packageDocumentation
 * @module CoreModule/domain
 * @author luchik
 */
/** */

import { ModelAbstract } from '@app-core/lib/domain/model-abstract/model-abstract';

/**
 * Abstract Model
 */
export abstract class EntityAbstract extends ModelAbstract {
    public abstract $type: string = 'EntityAbstract';

    /**
     * Constructor
     */
    constructor() {
        super();
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
}
