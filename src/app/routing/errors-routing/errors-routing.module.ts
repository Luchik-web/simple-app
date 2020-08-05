/**
 * Error static routing pages
 * @packageDocumentation
 * @module ErrorsRoutingModule
 * @preferred
 * @author luchik
 */
/** */

// Core Angular dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

/**
 * Static routing pages
 */
@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        NotFoundPageComponent,
    ],
    declarations: [
        NotFoundPageComponent,
    ],
})
export class ErrorsRoutingModule { }



// /**
//  * Channels view pages routing module
//  *
//  * @packageDocumentation
//  * @module routing/ChannelsRoutingModule
//  * @preferred
//  */
// /** */

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Routes, RouterModule } from '@angular/router';

// // Site modules
// import { SearchResultsModule } from '@app-site/search-results/search-results.module';

// // Shared Module
// import { SharedModule } from '@app-common/shared/shared.module';
// import { UiModule } from '@app-common/ui/ui.module';

// // Angular Modules
// import { SearchModule } from '@app-modules/search/search.module';
// import { SearchUniversalPageComponent } from './pages/search-universal-page/search-universal-page.component';
// import { FrameworkModule } from '@app-modules/framework/framework.module';

// // Pages
// import { SearchPageComponent } from './pages/search-page/search-page.component';

// // routes
// export const ROUTES: Routes = [
//     {
//         path: '',
//         component: SearchPageComponent,
//     },
//     {
//         path: 'global',
//         component: SearchUniversalPageComponent,
//     },
// ];

// @NgModule({
//     exports: [],
//     imports: [
//         RouterModule.forChild(ROUTES),
//         CommonModule,
//         SharedModule,
//         UiModule,
//         FrameworkModule,
//         SearchModule,
//         SearchResultsModule
//     ],
//     declarations: [
//         // Pages
//         SearchPageComponent,
//         SearchUniversalPageComponent,
//     ],
// })
// export class SearchRoutingModule { }
