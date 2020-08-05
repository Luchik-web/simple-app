/**
 * @packageDocumentation
 * @module CoreModule/domain
 */
/** */

import { EntityAbstract } from '@app-core/domain/models/entity-abstract/entity-abstract.ts';
import { UserInterface } from './user-interface';

/**
 * User Entity
 */
export class UserEntity extends EntityAbstract implements UserInterface {
    //////////////////////////////////////////////////////////////////////////////////////////
    // Entity System fields (non backend, related to Frontend only)
    public $type: string = 'User';

    //////////////////////////////////////////////////////////////////////////////////////////
    // Entity Base data (always on board)
    /**
     * User ID
     */
    public readonly id?: number;

    /**
     * First name
     */
    public first_name: string;

    /**
     * Last name
     */
    public last_name: string;

    /**
     * Description
     */
    public description: string;

    /**
     * Description
     */
    public icon_url: string;

    /**
     * Constructor
     *
     * Abstract constructor looks like:
     * ```
     *     constructor(data: any = null) {
     *         this._updateValue(data, true);
     *     }
     * ```
     * We should go with rewrite of the setter to make `this._updateValue` to be applied for current class.
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
    constructor(data: Object = null) {
        super();
        this._updateValue(data, true);
    }

}
