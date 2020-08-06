/**
 * @packageDocumentation
 * @module modules/OrganisationViewModule
 * @preferred
 * @author luchik
 *
 * Milestone Def module. Milestone Def components of the app
 */

/**
 * MilestonDef module
 */

// npm dependencies
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Shared Modules
import { UiModule } from '@app-shared/ui/ui.module';
import { ImageRenderModule } from '@app-shared/image-render/image-render.module';

// Non Exportable Form blocks components
import { OrganisationComponent } from './components/organisation/organisation.component';

@NgModule({
    imports: [
        // Base dependencies
        RouterModule,
        // Internal modules
        UiModule,
        ImageRenderModule,
    ],
    exports: [
        // View components
        OrganisationComponent,
    ],
    declarations: [
        // View components
        OrganisationComponent,
    ],
    providers: [
    ]
})
export class OrganisationViewModule { }
