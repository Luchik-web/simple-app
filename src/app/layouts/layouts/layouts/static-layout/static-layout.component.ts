/**
 * @packageDocumentation
 * @module layouts/LayoutsModule
 * @author luchik
 */
/** */

// Core Angular dependencies
import { Component, OnInit } from '@angular/core';

/**
 * Static pages Layout
 */
@Component({
    selector: 'app-layouts-layouts-static-layout',
    templateUrl: './static-layout.component.html',
    styleUrls: ['./static-layout.component.scss']
})
export class StaticLayoutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
