/**
 * @packageDocumentation
 * @module CoreModule/config
 * @author luchik
 */
/** */

/**
 * Config Error Record interface
 */
export interface ErrorConfigRecordInterface {
    message: string;
    code: number;
    status: string;
}

/**
 * Default error
 */
export const ERRORS_CONFIG_DEFAULT: ErrorConfigRecordInterface = {
    message: 'System error',
    code: 13,
    status: 'Unknown',
};

/**
 * Default error
 */
export const ERRORS_CONFIG_CUSTOM: ErrorConfigRecordInterface = {
    message: 'Custom error',
    code: 11,
    status: 'Unknown',
};

/**
 * Errorss config
 * Each record consist of:
 * - <string> message - Error message
 * - <number> code - Error status code
 * - <string> status - Error status text
 */
export const ERRORS_CONFIG: { [x: string]: ErrorConfigRecordInterface } = {
    UNAUTHORISED: {
        message: 'User is not authorised',
        code: 401,
        status: 'Not Authenticated',
    },
    UNAUTHORISED_NO_ACTIVE_CONTAINER: {
        message: 'You need to be inside Ecosystem or Organisation',
        code: 401,
        status: 'Not Authenticated',
    },
    SEARCH_ADVANCED_UNAUTHORISED_NO_ACTIVE_CONTAINER: {
        message: 'You need to be authorised or inside Ecosystem or Organisation to perform search',
        code: 401,
        status: 'Not Authenticated',
    },
    FORBIDDEN_ADMIN: {
        message: 'You need to be an admin to perform the action',
        code: 403,
        status: 'Forbidden',
    },
    FORBIDDEN: {
        message: 'You are not allowed',
        code: 403,
        status: 'Forbidden',
    },
    SERVER_RESPONSE_ERROR: {
        message: 'There was an error. Please try again later',
        code: 500,
        status: 'Server Response Error',
    },
    FIELD_REQUIRED_CONTAINER_ID: {
        message: 'Container is required and can\'t be empty',
        code: -1,
        status: 'Field required',
    },
    FIELD_REQUIRED: {
        message: 'Field is required and can\'t be empty',
        code: -1,
        status: 'Field required',
    },
    ENTITY_NOT_EXISTS: {
        message: 'Entity doesn\'t exist',
        code: 404,
        status: 'Not Exists',
    },
};
