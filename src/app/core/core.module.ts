/**
 * Core application layout
 * @packageDocumentation
 * @module CoreModule
 * @preferred
 * @author luchik
 */
/** */

// Angular dependencies
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Core Lib
import { Keygen } from '@app-core/lib/utils/keygen/keygen';

// Core Infrastructure
import { RequestAdapterService } from '@app-core/infrastructure/request/request-adapter/request-adapter.service';

/**
 * Core app logic module
 */
@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class CoreModule {
    /**
     * Provide Singelton for other Modules
     */
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: CoreModule,
            providers: [
                // Libs
                Keygen,
                // Infrastructure: Reqest
                RequestAdapterService,
            ]
        };
    }
}
