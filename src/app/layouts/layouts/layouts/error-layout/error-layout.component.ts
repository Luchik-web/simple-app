/**
 * @packageDocumentation
 * @module layouts/LayoutsModule
 * @author luchik
 */
/** */

// Core Angular dependencies
import { Component, OnInit } from '@angular/core';

/**
 * Error Layout
 */
@Component({
    selector: 'app-layouts-layouts-error-layout',
    templateUrl: './error-layout.component.html',
    styleUrls: ['./error-layout.component.scss']
})
export class ErrorLayoutComponent implements OnInit {
    public title = 'simple-app';

    constructor() { }

    ngOnInit(): void {
    }

}
