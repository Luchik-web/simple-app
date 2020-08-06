/**
 * Core application routing module
 * @packageDocumentation
 * @module AppRoutingModule
 * @preferred
 * @author luchik
 */
/** */

// Core Angular dependencies
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

// App Layouts
import { ErrorLayoutComponent } from '@app-layouts/layouts/layouts/error-layout/error-layout.component';
import { StaticLayoutComponent } from '@app-layouts/layouts/layouts/static-layout/static-layout.component';
// App components
import { NotFoundPageComponent } from '@app-routing/errors-routing/pages/not-found-page/not-found-page.component';

// App routing modules
// import { StaticRoutingModule } from '@app-routing/errors-routing/errors-routing.module';

///////////////////////////////////////////////////////////////////////////////////////////////////
/// BASE DECLARATIONS /////////////////////////////////////////////////////////////////////////////

const ROUTES: Routes = [];

///////////////////////////////////////////////////////////////////////////////////////////////////
/// BUILD ROUTES //////////////////////////////////////////////////////////////////////////////////

ROUTES.push.apply(ROUTES, [
    {
        path: 's',
        component: StaticLayoutComponent,
        loadChildren: () => import('@app-routing/static-routing/static-routing.module')
            .then(m => m.StaticRoutingModule),
    },
    {
        path: 'ui',
        component: StaticLayoutComponent,
        loadChildren: () => import('@app-routing/ui-routing/ui-routing.module')
            .then(m => m.UiRoutingModule),
    },
    {
        path: 'users',
        component: StaticLayoutComponent,
        loadChildren: () => import('@app-routing/users-routing/users-routing.module')
            .then(m => m.UsersRoutingModule),
    },
    {
        path: 'manage/users',
        component: StaticLayoutComponent,
        loadChildren: () => import('@app-routing/manage-users-routing/manage-users-routing.module')
            .then(m => m.ManageUsersRoutingModule),
    },
    {
        path: 'organisations',
        component: StaticLayoutComponent,
        loadChildren: () => import('@app-routing/organisations-routing/organisations-routing.module')
            .then(m => m.OrganisationsRoutingModule),
    },
    {
        path: 'manage/organisations',
        component: StaticLayoutComponent,
        loadChildren: () => import('@app-routing/manage-organisations-routing/manage-organisations-routing.module')
            .then(m => m.ManageOrganisationsRoutingModule),
    },
    {
        path: '',
        component: StaticLayoutComponent,
        loadChildren: () => import('@app-routing/static-routing/static-routing.module')
            .then(m => m.StaticRoutingModule),
    },
    {
        path: '**',
        component: ErrorLayoutComponent,
        children: [
            {
                path: '',
                component: NotFoundPageComponent,
            },
        ]
    }
]);

/**
 * Routing
 */

export const routingConfiguration: ExtraOptions = {
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload',
    paramsInheritanceStrategy: 'always',
};
export const routes: Routes = ROUTES;
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes, routingConfiguration);
