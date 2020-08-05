/**
 * @packageDocumentation
 * @module layouts/LayoutsModule
 * @author luchik
 */
/** */

// Core Angular dependencies
import { Component, OnInit } from '@angular/core';

/**
 * 404 page not found page
 */
@Component({
    selector: 'app-errors-routing-error-layout',
    templateUrl: './not-found-page.component.html',
    styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
