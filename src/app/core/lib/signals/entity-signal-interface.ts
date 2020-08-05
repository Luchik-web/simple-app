/**
 * @packageDocumentation
 * @module CoreModule/lib
 * @author luchik
 */
/** */

import { ENTITY_SIGNAL_ACTIONS_MESSAGES, SignalActionsType } from './configs/signal-actions-config';

/**
 * Message bus interface
 */
export interface EntitySignalInterface {
    /**
     * Performed action, required
     */
    action: SignalActionsType;
    /**
     * Is action successfull or not, required
     */
    success: boolean;
    /**
     * Index in array if provided
     */
    index?: number;
    /**
     * Entity the action was performed on
     */
    entity?: any;
    /**
     * Entity type - the  `$type: string` from EntityAbstract
     */
    entity_type?: string;
    /**
     * Additionall data
     */
    payload?: any;
    /**
     * Error/Success message, required
     */
    message?: string;
}

/**
 * Create single signal
 *
 * Use in
 *  - whenSelected
 *  - whenChanged
 *
 * @param SignalActionsEnum action
 * @param boolean success
 * @param any entity
 * @param number index
 * @param any payload
 */
export function newEntitySignal(
    action: SignalActionsType,
    success: boolean,
    entity: any = null,
    index: number = -1,
    payload: any = null,
    message: string = null,
): EntitySignalInterface {
    const result: EntitySignalInterface = {
        success: success,
        action: action,
        entity: entity,
    };

    result.index = ('number' === typeof index && index > -1) ? index : -1;

    if (entity && 'object' === typeof entity && entity.$type) {
        result.entity_type = entity.$type;
    }

    if (payload) {
        result.payload = payload;
    }

    if (message) {
        result.message = message;
    } else if (success) {
        result.message = ENTITY_SIGNAL_ACTIONS_MESSAGES.get(action)[0];
    } else {
        result.message = ENTITY_SIGNAL_ACTIONS_MESSAGES.get(action)[1];
    }

    return result;
}
