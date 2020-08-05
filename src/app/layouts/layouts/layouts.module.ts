/**
 * Layouts base module
 * @packageDocumentation
 * @module layouts/LayoutsModule
 * @preferred
 * @author luchik
 */
/** */

// Core Angular dependencies
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// App modules
import { UiModule } from '@app-shared/ui/ui.module';

// Module Components
import { AppHeaderNavComponent } from './components/app-header-nav/app-header-nav.component';

// Module Layouts
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { ErrorLayoutComponent } from './layouts/error-layout/error-layout.component';
import { StaticLayoutComponent } from './layouts/static-layout/static-layout.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

/**
 * Layouts base module
 */
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        // Module Components
        UiModule,
    ],
    exports: [
        // Module Layouts
        AppLayoutComponent,
        ErrorLayoutComponent,
        StaticLayoutComponent,
    ],
    declarations: [
        // Module Components
        AppHeaderNavComponent,
        // Module Layouts
        AppLayoutComponent,
        ErrorLayoutComponent,
        StaticLayoutComponent,
        AppFooterComponent,
    ],
    providers: [
        // Module Components
        AppHeaderNavComponent,
    ],
})
export class LayoutsModule { }
