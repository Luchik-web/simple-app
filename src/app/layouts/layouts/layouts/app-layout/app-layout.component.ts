/**
 * @packageDocumentation
 * @module layouts/LayoutsModule
 * @author luchik
 */
/** */

// Core Angular dependencies
import { Component, OnInit } from '@angular/core';

/**
 * Base layout
 */
@Component({
    selector: 'app-layouts-layouts-app-layout',
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
