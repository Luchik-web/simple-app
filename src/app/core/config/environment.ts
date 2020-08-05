/**
 * @packageDocumentation
 * @module CoreModule/config
 * @author luchik
 */
/** */

import { environment as _environment } from '@env/environment';

/**
 * Redefine environment to use proper settings
 */
export const environment = {
    apiUrl: location.origin,
    allowForceRedirect: _environment.production,
};
