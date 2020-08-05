/**
 * @packageDocumentation
 * @module routing/UiRoutingModule
 * @author luchik
 */
/** */

import { Component, OnInit } from '@angular/core';

/**
 * Empty Layout. Doesn't use any additionall data redering like headers and footers. Used on non site pages like tests and ui pages
 */
@Component({
    selector: 'app-ui-routing-layout-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    constructor() { }

    /**
     * Triggers on Component initiation
     */
    ngOnInit() { }

}
