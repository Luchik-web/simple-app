/**
 * Manage Organisations routing
 * @packageDocumentation
 * @module routing/ManageOrganisationsRoutingModule
 * @preferred
 * @author luchik
 */
/** */

// Angular dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// Material modules
import { MatInputModule } from '@angular/material/input';

// Core Modules
import { UiModule } from '@app-shared/ui/ui.module';
import { OrganisationManageModule } from '@app-modules/organisation-manage/organisation-manage.module';

// Internal Components
import { ManageOrganisationPageComponent } from './pages/manage-organisation-page/manage-organisation-page.component';

// routes
export const ROUTES: Routes = [
    {
        path: ':organisationId',
        component: ManageOrganisationPageComponent,
    },
    {
        path: 'create',
        component: ManageOrganisationPageComponent,
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        // Material modules
        ReactiveFormsModule,
        MatInputModule,
        // App modules
        UiModule,
        OrganisationManageModule,
    ],
    declarations: [
        ManageOrganisationPageComponent
    ],
})
export class ManageOrganisationsRoutingModule { }
