/**
 * @packageDocumentation
 * @module CoreModule/domain
 */
/** */

import { EntityAbstract } from '@app-core/domain/models/entity-abstract/entity-abstract.ts';
import { OrganisationInterface } from './organisation-interface';

/**
 * Organisation Entity
 */
export class OrganisationEntity extends EntityAbstract implements OrganisationInterface {
    //////////////////////////////////////////////////////////////////////////////////////////
    // Entity System fields (non backend, related to Frontend only)
    public $type: string = 'Organisation';

    //////////////////////////////////////////////////////////////////////////////////////////
    // Entity Base data (always on board)
    /**
     * Organisation ID
     */
    public readonly id?: number;

    /**
     * Name
     */
    public name: string;

    /**
     * Description
     */
    public description: string;

    /**
     * Icon URL
     */
    public icon_url: string;

    /**
     * Background Image URL
     */
    public background_image_url: string;

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
