/**
 * @packageDocumentation
 * @module shared/ImageRenderModule
 * @author luchik
 */
/** */

import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

/**
 * Shared Background image directive
 */
@Directive({
    selector: '[sharedBackgroundImage]'
})
export class BackgroundImageDirective implements OnInit {

    /**
     * Imgage url
     */
    private _preferedBackgroundImage: string = null;
    @Input('sharedBackgroundImage') set imagePreferedUrl(imagePreferedUrl: string) {
        this._preferedBackgroundImage = imagePreferedUrl;
        this.renderStyles();
    }
    private _defaultBackgroundImage: string = null;
    @Input('sharedBackgroundDefaulrImage') set imageDefaulrUrl(imageDefaulrUrl: string) {
        this._defaultBackgroundImage = imageDefaulrUrl;
        this.renderStyles();
    }

    /**
     * Imgage url
     */
    constructor(
        private renderer: Renderer2,
        private elementRef: ElementRef
    ) { }

    /**
     * Triggers on Component initiation
     */
    ngOnInit() {
        this._addClass(this.elementRef.nativeElement, 'doit-bgimg');
    }

    /**
     * Set image background. Change bachground image of the Element
     * @returns void
     */
    private renderStyles(): void {
        const element: HTMLElement = this.elementRef.nativeElement;
        let bgImg: string = '';

        if (!this._preferedBackgroundImage && !this._defaultBackgroundImage) {
            this._addClass(this.elementRef.nativeElement, 'doit-bgimg--noimg');
            element.style.backgroundImage = null;
            return;
        }

        if (this._preferedBackgroundImage) {
            bgImg = 'url(' + this._preferedBackgroundImage + ')';
        }
        if (this._defaultBackgroundImage) {
            bgImg += (element.style.backgroundImage ? ',' : '') + 'url(' + this._defaultBackgroundImage + ')';
        }
        this._removeClass(this.elementRef.nativeElement, 'doit-bgimg--noimg');
        element.style.backgroundImage = bgImg;
    }

    /**
     * Add class of the Element
     * @param HTMLElement element DOM Element
     * @param string className Class name
     * @returns void
     */
    private _addClass(element: HTMLElement, className: string): void {
        this.renderer.addClass(element, className);
    }

    /**
     * Remove class from the Element
     * @param HTMLElement element DOM Element
     * @param string className Class name
     * @returns void
     */
    private _removeClass(element: HTMLElement, className: string): void {
        this.renderer.removeClass(element, className);
    }
}
