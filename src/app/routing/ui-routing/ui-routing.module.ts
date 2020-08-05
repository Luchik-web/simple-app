/**
 * The Module that provides the base application information for the app developers
 *
 * @packageDocumentation
 * @module routing/UiRoutingModule
 * @preferred
 */
/** */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Core Modules
import { UiModule } from '@app-shared/ui/ui.module';

// layouts
import { LayoutComponent } from './layout/layout.component';
// Components
import { NavComponent } from './components/nav/nav.component';
// Pages
import { IconsPageComponent } from './pages/icons-page/icons-page.component';

// routes
export const ROUTES: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '', component: IconsPageComponent,
            },
            {
                path: 'icons', component: IconsPageComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        UiModule,
    ],
    declarations: [
        // Pages
        IconsPageComponent,
        // Layouts
        LayoutComponent,
        // Components
        NavComponent,
    ],
})
export class UiRoutingModule { }

