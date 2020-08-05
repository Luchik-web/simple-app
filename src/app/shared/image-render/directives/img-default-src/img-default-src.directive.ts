/**
 * @packageDocumentation
 * @module shared/ImageRenderModule
 * @author luchik
 */
/** */

import { Directive, Input, HostBinding } from '@angular/core';

/**
 * Directive to add image if the currently provided in src image does not exist
 *
 * @example
 * ```
 *      <img [src]="currentUser.avatar_url" appSharedImagesImgDefaultSrc = "/assets/images/ui/icons/user-gray.svg" />
 * ```
 */
@Directive({
    selector: 'img[appSharedImagesImgDefaultSrc]',
    host: {
        '(error)': 'error()',
        '(load)': 'load()',
        '[src]': 'src'
    }
})
export class ImageAttrDefaultDirective {
    @Input() src: string;
    @Input() appSharedImagesImgDefaultSrc: string;
    @HostBinding('class') className;

    /**
     * Update image to default one
     */
    public error() {
        this.src = this.appSharedImagesImgDefaultSrc;
    }

    /**
     * React on onload
     */
    public load() {
        this.className = 'doit-img-loaded';
    }
}
