/**
 * Organisation pages routing
 * @packageDocumentation
 * @module routing/OrganisationsRoutingModule
 * @preferred
 * @author luchik
 */
/** */

// Angular dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Material js
import { MatButtonModule } from '@angular/material/button';

// Core Modules
import { UiModule } from '@app-shared/ui/ui.module';
import { OrganisationViewModule } from '@app-modules/organisation-view/organisation-view.module';

// Internal Components
import { OrganisationPreviewPageComponent } from './pages/organisation-preview-page/organisation-preview-page.component';

// routes
export const ROUTES: Routes = [
    {
        path: 'preview/:organisationId',
        component: OrganisationPreviewPageComponent,
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        UiModule,
        OrganisationViewModule,
        MatButtonModule
    ],
    declarations: [
        OrganisationPreviewPageComponent
    ],
})
export class OrganisationsRoutingModule { }
