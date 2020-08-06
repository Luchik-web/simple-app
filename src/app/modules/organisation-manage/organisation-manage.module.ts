/**
 * @packageDocumentation
 * @module modules/OrganisationManageModule
 * @preferred
 * @author luchik
 *
 * Milestone Def module. Milestone Def components of the app
 */

/**
 * MilestonDef module
 */

// npm dependencies
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// Material js
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule, } from '@angular/material/input';
import { MatButtonModule, } from '@angular/material/button';

// Shared Modules
import { UiModule } from '@app-shared/ui/ui.module';

// Non Exportable Form blocks components
import { OrganisationFormComponent } from './components/organisation-form/organisation-form.component';

@NgModule({
    imports: [
        // Base dependencies
        RouterModule,
        ReactiveFormsModule,
        // Material js
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        // Internal modules
        UiModule,
    ],
    exports: [
        // Form components
        OrganisationFormComponent,
    ],
    declarations: [
        // Form components
        OrganisationFormComponent,
    ],
    providers: [
    ]
})
export class OrganisationManageModule { }
