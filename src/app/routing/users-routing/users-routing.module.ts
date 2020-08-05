/**
 * User pages routing
 * @packageDocumentation
 * @module routing/UsersRoutingModule
 * @preferred
 * @author luchik
 */
/** */

// Angular dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Core Modules
import { UiModule } from '@app-shared/ui/ui.module';
import { UserViewModule } from '@app-modules/user-view/user-view.module';

// Internal Components
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';

// routes
export const ROUTES: Routes = [
    {
        path: 'me',
        component: UserProfilePageComponent,
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        UiModule,
        UserViewModule,
    ],
    declarations: [
        UserProfilePageComponent
    ],
})
export class UsersRoutingModule { }
