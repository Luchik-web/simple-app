/**'
 * @packageDocumentation
 * @module modules/UserManageModule
 * @author luchik
 */
/** */

import { Component, Input, Output, EventEmitter, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Core Libs
import { EntitySignalInterface, newEntitySignal } from '@app-core/lib/signals/entity-signal-interface';
import { SignalActionsType } from '@app-core/lib/signals/configs/signal-actions-config';

// Core Domain
import { UserInterface } from '@app-core/domain/models/user-entity/user-interface';
import { UserEntity } from '@app-core/domain/models/user-entity/user-entity';

// Core services
import { UserCoreService } from '@app-core/services/user-core/user-core.service';

// Common Shared services and entities
import { FormComponentAbstract } from '@app-shared/ui/domain/form-component-abstract/form-component-abstract';
import { EntityFormDataMapperInterface } from '@app-shared/ui/domain/form-component-abstract/entity-form-data-mapper';
import { FormComponentInterface } from '@app-shared/ui/domain/form-component-abstract/form-component-interface';

// Internal services and Components
import { UserFormDataMapper } from '@app-modules/user-manage/services/user-form-data-mapper/user-form-data-mapper';
import { ResponseError } from '@app-core/infrastructure/request/response-error/response-error';

/**
 * Milestone Def Extarnal Link Form component
 */
@Component({
    selector: 'app-modules-user-manage-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent
    extends FormComponentAbstract
    implements FormComponentInterface {

    @Input() public initialData: UserInterface;
    @Input() public options: {} = {};
    @Output() public whenChanged: EventEmitter<EntitySignalInterface> = new EventEmitter();

    public userForm: FormGroup;
    public entityFormDataMapper: EntityFormDataMapperInterface = new UserFormDataMapper();
    protected _formDefaultValues = {
    };

    constructor(
        private fb: FormBuilder,
        private userCoreService: UserCoreService,
    ) {
        super();
        this.userForm = this.fb.group({
            'icon_url': ['', [Validators.required, Validators.maxLength(500)]],
            'first_name': ['', [Validators.required, Validators.maxLength(25)]],
            'last_name': ['', [Validators.required, Validators.maxLength(25)]],
            'description': ['', [Validators.maxLength(2500)]],
        });
    }

    /**
     * Triggers on Component initiation
     */
    ngOnInit() {
    }

    /**
     * Submit userJob form
     */
    onSubmitForm(): void {
        let formData = JSON.parse(JSON.stringify(this.userForm.value));
        if (!this.userForm.valid) {
            return;
        }
        formData = this.entityFormDataMapper.toEntityData(formData, this.initialData, this._formDefaultValues);

        this.userCoreService.saveUser(formData)
            .subscribe((user: UserEntity) => {
                const action: SignalActionsType = this.initialData.id ? 'UPDATED' : 'CREATED';
                this.userForm.reset();
                this.whenChanged.emit(newEntitySignal(action, true, user, null));
            }, (error: ResponseError) => {
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
            Object.keys(this.userForm.controls),
            this._formDefaultValues
        );

        setTimeout(() => {
            this.userForm.reset(formData);
            this.isFormBusy = false;
        });
    }

    /**
     * Set Form options processing
     * @returns void
     */
    protected _fetchOptions(): void { }
}
