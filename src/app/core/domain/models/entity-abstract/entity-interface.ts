/**
 * @packageDocumentation
 * @module CoreModule/domain
 * @author luchik
 */
/** */

/**
 * Entity Interface
 */
export interface EntityInterface {
    $type: string;
    id?: number;
    [x: string]: any;
}
