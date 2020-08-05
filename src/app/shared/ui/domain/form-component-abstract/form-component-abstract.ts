/**
 * @packageDocumentation
 * @module shared/UiModule
 * @author luchik
 */
/** */

import { Input, Output, OnInit, OnChanges, EventEmitter, SimpleChanges, Component } from '@angular/core';

// Core Domain
import { EntityAbstract } from '@app-core/domain/models/entity-abstract/entity-abstract';

// Core Libs
import { EntitySignalInterface } from '@app-core/lib/signals/entity-signal-interface'
import { ListSignalInterface } from '@app-core/lib/signals/list-signal-interface';

// The module dependencies
import { FormComponentInterface } from './form-component-interface';
import { EntityFormDataMapperAbstract } from './entity-form-data-mapper';

/**
 * Abstract Component tile
 */
@Component({
    selector: 'app-shared-ui-form-component-abstract',
    template: '',
})
export abstract class FormComponentAbstract implements OnChanges, OnInit, FormComponentInterface {
    //////////////////////////////////////////////////////////////////////////////////////////
    // Base Inputs/Outputs data section
    /**
     * Initial form data
     */
    @Input() public initialData: EntityAbstract | any;
    /**
     * Component rendering options
     */
    @Input() public options: any = {};
    /**
     * Emit tile click
     */
    @Output() public whenChanged: EventEmitter<EntitySignalInterface> = new EventEmitter();
    /**
     * Emit form data list dependencies are loded
     */
    @Output() public whenLoaded?: EventEmitter<ListSignalInterface> = new EventEmitter();

    //////////////////////////////////////////////////////////////////////////////////////////
    // Control related data section

    public entityFormDataMapper?: EntityFormDataMapperAbstract = null;
    public isFormBusy: boolean;
    public formErrors: Array<string> | null;

    /**
     * The form data initial values. Need to be defined
     */
    protected abstract readonly _formDefaultValues: { [x: string]: any };

    //////////////////////////////////////////////////////////////////////////////////////////
    // Life cycle variables

    constructor() {
    }

    //////////////////////////////////////////////////////////////////////////////////////////
    // Component interface functionality

    /**
     * Triggers on Component initiation
     */
    public ngOnChanges(changes: SimpleChanges) {
        let key: string;
        for (key in changes) {
            if (!changes.hasOwnProperty(key)) {
                continue;
            }
            switch (key) {
                case 'initialData':
                    setTimeout(() => {
                        this._fetchData();
                    });
                    break;
                case 'options':
                    setTimeout(() => {
                        this._fetchOptions();
                    });
                    break;
            }
        }
    }

    /**
     * Init base form data
     */
    public ngOnInit(): void {
    }

    //////////////////////////////////////////////////////////////////////////////////////////
    // Component actions

    /**
     * Save form data
     * @returns void
     */
    public abstract onSubmitForm(): void;

    //////////////////////////////////////////////////////////////////////////////////////////
    // Data fetching

    /**
     * Set Form inital data to form
     *
     * @example
     * ```
     *  protected  _fetchData(): void {
     *      Object.keys(this.form.controls).forEach((formGroupName: string) => {
     *          if (!this.entityFormDataMapper) {
     *               return;
     *          }
     *          this.isFormBusy = true;
     *          const formGroup: FormGroup = <FormGroup>this.form.get(formGroupName);
     *          const formData: any = this.entityFormDataMapper.toFormData(
     *              this.initialData,
     *              Object.keys(formGroup.controls),
     *              this._formDefaultValues
     *          );
     *          setTimeout(() => {
     *              formGroup.reset(formData);
     *              this.isFormBusy = true;
     *          });
     *      });
     *  }
     * ```
     * @returns void
     */
    protected abstract _fetchData(): void;

    /**
     * Set Form options processing
     * @returns void
     */
    protected abstract _fetchOptions(): void;

    //////////////////////////////////////////////////////////////////////////////////////////
    // Private methods definitions
}
