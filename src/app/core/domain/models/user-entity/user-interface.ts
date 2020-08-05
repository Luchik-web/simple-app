/**
 * @packageDocumentation
 * @module CoreModule/domain
 * @author luchik
 */
/** */

/**
 * Generic User Interface
 */
export interface UserInterface {
    id?: number;
    first_name?: string;
    last_name?: string;
    description?: string;
    icon_url?: string;
    [x: string]: any;
}
