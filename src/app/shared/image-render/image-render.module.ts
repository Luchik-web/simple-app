/**
 * @packageDocumentation
 * @module shared/ImageRenderModule
 * @preferred
 * @author luchik
 */
/** */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Internal Directives
import { BackgroundImageDirective } from './directives/background-image/background-image.directive';
import { ImageAttrDefaultDirective } from './directives/img-default-src/img-default-src.directive';

// Pipes
/**
 * Shared UI Module
 **/
@NgModule({
    exports: [
        CommonModule,
        // Directives
        BackgroundImageDirective,
        ImageAttrDefaultDirective,
    ],
    declarations: [
        // Directives
        BackgroundImageDirective,
        ImageAttrDefaultDirective,
    ],
    providers: [
    ],
})
export class ImageRenderModule { }
