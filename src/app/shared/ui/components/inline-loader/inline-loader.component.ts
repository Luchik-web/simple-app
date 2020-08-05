/**
 * @packageDocumentation
 * @module shared/UiModule
 * @author luchik
 */
/** */

import { Component, Input } from '@angular/core';

/**
 * Inline loader component
 */
@Component({
    selector: 'app-common-ui-inline-loader',
    templateUrl: './inline-loader.component.html',
    styleUrls: ['./inline-loader.component.scss']
})
export class InlineLoaderComponent {
    /**
     * Current User entity
     */
    @Input() loading: boolean;
}
