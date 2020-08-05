/**
 * Base static pages
 * @packageDocumentation
 * @module routing/StaticRoutingModule
 * @preferred
 * @author luchik
 */
/** */

// Angular dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Internal Componentss
import { AboutComponent } from './pages/about/about.component';
import { TaskComponent } from './pages/task/task.component';

// routes
export const ROUTES: Routes = [
    {
        path: '',
        component: AboutComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'task',
        component: TaskComponent,
    },
];
/**
 * Base static pages
 */
@NgModule({
    exports: [],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
    ],
    declarations: [
        // Pages
        AboutComponent,
        TaskComponent,
    ],
})
export class StaticRoutingModule { }
