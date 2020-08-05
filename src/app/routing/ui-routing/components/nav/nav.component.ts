/**
 * @packageDocumentation
 * @module routing/UiRoutingModule
 * @author luchik
 */
/** */

import { Component } from '@angular/core';

/**
 * The UI page that provides the list of all the icons avaliable in the system
 */
@Component({
    selector: 'app-ui-routing-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
    // Icons list
    public menuTree: any = [
        {
            title: 'Design', routerLink: '/ui/icons', items: [
                { title: 'Icons', routerLink: '/ui/icons' }
            ]
        },
    ];

    constructor(
    ) {
    }

}
