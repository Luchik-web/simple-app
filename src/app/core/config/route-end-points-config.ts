/**
 * @packageDocumentation
 * @module CoreModule/config
 * @author luchik
 * @TODO need to be sorted, right now we have the same methods, need to order them by the aggregate they are using
 */
/** */

/**
 * Route endpoints
 */
import { environment } from '@app-core/config/environment';

export const RouteEndPointsConfig: Array<any> = [
    {
        'name': 'users.users.create',
        'method': 'POST',
        'api_route': environment.apiUrl + '/assets/test-data/user.json'
    },
    {
        'name': 'users.users.update',
        'method': 'PUT',
        'api_route': environment.apiUrl + '/assets/test-data/user_{{id}}.json'
    },
    {
        'name': 'users.users.get_by_id',
        'method': 'GET',
        'api_route': environment.apiUrl + '/assets/test-data/user_{{user_id}}.json'
    },
];
