/**'
 * @packageDocumentation
 * @module modules/OrganisationManageModule
 * @author luchik
 */
/** */

import { Component, Input, Output, EventEmitter, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

// Core Libs
import { EntitySignalInterface, newEntitySignal } from '@app-core/lib/signals/entity-signal-interface';
import { SignalActionsType } from '@app-core/lib/signals/configs/signal-actions-config';

// Core Domain
import { OrganisationInterface } from '@app-core/domain/models/organisation-entity/organisation-interface';
import { OrganisationEntity } from '@app-core/domain/models/organisation-entity/organisation-entity';

// Core services
import { OrganisationCoreService } from '@app-core/services/organisation-core/organisation-core.service';

// Common Shared services and entities
import { FormComponentAbstract } from '@app-shared/ui/domain/form-component-abstract/form-component-abstract';
import { EntityFormDataMapperInterface } from '@app-shared/ui/domain/form-component-abstract/entity-form-data-mapper';
import { FormComponentInterface } from '@app-shared/ui/domain/form-component-abstract/form-component-interface';

// Internal services and Components
import { OrganisationFormDataMapper } from '@app-modules/organisation-manage/services/organisation-form-data-mapper/organisation-form-data-mapper';
import { ResponseError } from '@app-core/infrastructure/request/response-error/response-error';

/**
 * Milestone Def Extarnal Link Form component
 */
@Component({
    selector: 'app-modules-organisation-manage-organisation-form',
    templateUrl: './organisation-form.component.html',
    styleUrls: ['./organisation-form.component.scss']
})
export class OrganisationFormComponent
    extends FormComponentAbstract
    implements FormComponentInterface {

    @Input() public initialData: OrganisationInterface;
    @Input() public options: {} = {};
    @Output() public whenChanged: EventEmitter<EntitySignalInterface> = new EventEmitter();

    public organisationForm: FormGroup;
    public entityFormDataMapper: EntityFormDataMapperInterface = new OrganisationFormDataMapper();
    protected _formDefaultValues = {
    };
    public loading = false;

    constructor(
        private fb: FormBuilder,
        private organisationCoreService: OrganisationCoreService,
    ) {
        super();
        this.organisationForm = this.fb.group({
            'name': ['', [Validators.required, Validators.maxLength(250)]],
            'description': ['', [Validators.maxLength(2000)]],
            'icon_url': ['', [Validators.required]],
            'background_image_url': ['', [Validators.required]],
        });
    }

    /**
     * Triggers on Component initiation
     */
    ngOnInit() {
        this.initialData =
            this.initialData ?
                this.initialData :
                {
                    'name': '',
                    'description': '',
                    'icon_url': '',
                    'background_image_url': ''
                };
    }

    /**
     * Submit Organisation form
     */
    onSubmitForm(): void {
        let formData = JSON.parse(JSON.stringify(this.organisationForm.value));
        if (!this.organisationForm.valid) {
            return;
        }
        this.loading = true;
        formData = this.entityFormDataMapper.toEntityData(formData, this.initialData, this._formDefaultValues);

        this.organisationCoreService.saveOrganisation(formData)
            .subscribe((organisation: OrganisationEntity) => {
                this.loading = false;
                const action: SignalActionsType = (this.initialData && this.initialData.id) ? 'UPDATED' : 'CREATED';
                this.organisationForm.reset();
                this.whenChanged.emit(newEntitySignal(action, true, organisation, null));
            }, (error: ResponseError) => {
                this.loading = false;
                this.formErrors = error.errors;
            });
    }


    /**
     * Set milestone data to form
     * @param initialData
     * @returns void
     */
    protected _fetchData(): void {
        let formData: any = {};
        this.isFormBusy = true;

        formData = this.entityFormDataMapper.toFormData(
            this.initialData,
            Object.keys(this.organisationForm.controls),
            this._formDefaultValues
        );

        setTimeout(() => {
            this.organisationForm.reset(formData);
            this.isFormBusy = false;
        });
    }

    /**
     * Set Form options processing
     * @returns void
     */
    protected _fetchOptions(): void { }

}
