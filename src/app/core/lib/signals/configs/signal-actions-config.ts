/**
 * @packageDocumentation
 * @module CoreModule/infrastructure
 * @author luchik
 */
/** */

/**
 * Entity allowed actions
 */
export enum SignalActionsEnum {
    CREATED = 'CREATED',
    UPDATED = 'UPDATED',
    DELETED = 'DELETED',
    ACCEPTED = 'ACCEPTED',
    DECLINED = 'DECLINED',
    REQUESTED = 'REQUESTED',
    SELECTED = 'SELECTED',
    LOADED = 'LOADED',
    SKIPPED = 'SKIPPED',
    CANCELED = 'CANCELED',
    SWITCHED = 'SWITCHED',
}

/**
 * Entity Actions as string
 */
export type SignalActionsType = keyof typeof SignalActionsEnum;

/**
 * Success messages
 *
 * ```
 * if (!ENTITY_SIGNAL_ACTION_SUCCESS_MESSAGES.has('CREATE')) {
 *      throw new Error('Action does not exist');
 * }
 * console.log(ENTITY_SIGNAL_ACTION_SUCCESS_MESSAGES.get('CREATE'));
 * ```
 */
export const ENTITY_SIGNAL_ACTIONS_MESSAGES: Map<string, Array<string>> = new Map([
    [SignalActionsEnum.CREATED, ['Created', 'Creation failed']],
    [SignalActionsEnum.UPDATED, ['Updated', 'Updation failed']],
    [SignalActionsEnum.DELETED, ['Deleted', 'Deletion failed']],
    [SignalActionsEnum.ACCEPTED, ['Accepted', 'Acception failed']],
    [SignalActionsEnum.DECLINED, ['Declined', 'Declinion failed']],
    [SignalActionsEnum.REQUESTED, ['Requested', 'Request failed']],
    [SignalActionsEnum.SELECTED, ['Selected', 'Selection failed']],
    [SignalActionsEnum.LOADED, ['Loaded', 'Loading failed']],
    [SignalActionsEnum.SKIPPED, ['Skipped', 'Skipping failed']],
    [SignalActionsEnum.CANCELED, ['Canceled', 'Canelation failed']],
    [SignalActionsEnum.SWITCHED, ['Switched', 'Switching failed']],
]);