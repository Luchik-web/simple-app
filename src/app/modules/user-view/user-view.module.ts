/**
 * @packageDocumentation
 * @module modules/UserViewModule
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
import { UserBannerComponent } from './components/user-banner/user-banner.component';

@NgModule({
    imports: [
        // Base dependencies
        RouterModule,
        // Internal modules
        UiModule,
        ImageRenderModule,
    ],
    exports: [
        // Form components
        UserBannerComponent,
    ],
    declarations: [
        // Form components
        UserBannerComponent,
    ],
    providers: [
    ]
})
export class UserViewModule { }
