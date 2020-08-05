/**
 * @packageDocumentation
 * @module CoreModule/lib
 * @author luchik
 */
/** */

import { SignalActionsEnum, SignalActionsType } from './configs/signal-actions-config';

/**
 * Success messages
 *
 * ```
 * if (!LIST_SIGNAL_ACTION_SUCCESS_MESSAGES.has('CREATE')) {
 *      throw new Error('Action does not exist');
 * }
 * console.log(LIST_SIGNAL_ACTION_SUCCESS_MESSAGES.get('CREATE'));
 * ```
 */
const LIST_SIGNAL_ACTIONS_MESSAGES: Map<string, Array<string>> = new Map([
    [SignalActionsEnum.CREATED, ['Created', 'Creation failed']],
    [SignalActionsEnum.UPDATED, ['Updated', 'Updation failed']],
    [SignalActionsEnum.DELETED, ['Deleted', 'Deletion failed']],
    [SignalActionsEnum.ACCEPTED, ['Accepted', 'Acception failed']],
    [SignalActionsEnum.DECLINED, ['Declined', 'Declinion failed']],
    [SignalActionsEnum.REQUESTED, ['Requested', 'Request failed']],
    [SignalActionsEnum.SELECTED, ['Selected', 'Selection failed']],
    [SignalActionsEnum.LOADED, ['Loaded', 'Loading failed']],
    [SignalActionsEnum.SKIPPED, ['Skipped', 'Skipping failed']],
    [SignalActionsEnum.SWITCHED, ['Switched', 'Switching failed']],
]);

/**
 * Message bus interface
 */
export interface ListSignalInterface {
    /**
     * Performed action, required
     */
    action: SignalActionsType;
    /**
     * Is action successfull or not, required
     */
    success: boolean;
    /**
     * Entity the action was performed on
     */
    count_loaded: number;
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
 * @param SignalActionsEnum action
 * @param boolean success
 * @param any entity
 * @param number index
 * @param any payload
 */
export function newListSignal(
    action: SignalActionsType,
    success: boolean,
    countLoaded: number,
    payload: any = null,
): ListSignalInterface {
    const result: ListSignalInterface = {
        success: success,
        action: action,
        count_loaded: countLoaded,
    };

    if (payload) {
        result.payload = payload;
    }

    if (success) {
        result.message = LIST_SIGNAL_ACTIONS_MESSAGES.get(action)[0];
    } else {
        result.message = LIST_SIGNAL_ACTIONS_MESSAGES.get(action)[1];
    }

    return result;
}
