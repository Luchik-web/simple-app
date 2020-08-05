/**
 * Manage Users routing
 * @packageDocumentation
 * @module routing/ManageUsersRoutingModule
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
import { UserManageModule } from '@app-modules/user-manage/user-manage-manage.module';

// Internal Components
import { ManageUserPageComponent } from './pages/manage-user-page/manage-user-page.component';

// routes
export const ROUTES: Routes = [
    {
        path: 'me',
        component: ManageUserPageComponent,
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
        UserManageModule,
    ],
    declarations: [
        ManageUserPageComponent
    ],
})
export class ManageUsersRoutingModule { }
