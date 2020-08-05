
/**
 * @packageDocumentation
 * @module CoreModule.domain
 * @author luchik
 * @TODO better to use this on processing the responses
 */
/** */

import { ERRORS_CONFIG, ERRORS_CONFIG_DEFAULT, ErrorConfigRecordInterface, ERRORS_CONFIG_CUSTOM } from '@app-core/config/errors-config';

/**
 * Error response returned by the server
 * @returns ResponseError
 */
export class ResponseError extends Error {
    public name: string = 'ResponseError';
    public message: string;
    public errors: Array<string> = [];
    public status: number = null;
    public statusText: string = null;
    public stack?: string;

    /**
     * Constructor
     */
    constructor(message: string, status?: number, statusText?: string) {
        super(message);
        this.errors = [message];
        this.status = status || null;
        this.statusText = statusText || null;
    }

    /**
     * Create new error from Errors Config file
     */
    static newFromConfig(alias: string) {
        const error: ErrorConfigRecordInterface = ERRORS_CONFIG[alias] || ERRORS_CONFIG_DEFAULT;
        return new ResponseError(error.message, error.code, error.status);
    }

    /**
     * Create new error from Errors Config file
     */
    static newFromString(message: string) {
        const error: ErrorConfigRecordInterface = ERRORS_CONFIG_CUSTOM;
        return new ResponseError(message, error.code, error.status);
    }

    /**
     * Create new error from Errors Config file
     *
     * @param string fieldName
     * @param Array<string> allowed
     * @param any fieldValue Field value provided
     */
    static newFieldRequired(fieldName: string, valuesAllowed: Array<string> = [], ...fieldValue: Array<any>) {
        const error: ErrorConfigRecordInterface = ERRORS_CONFIG_CUSTOM;
        let errorMsg: string;

        errorMsg = 'Field `' + fieldName + '` is required and can\'t be empty.';
        if (valuesAllowed.length) {
            errorMsg += ' Please use [\'' + valuesAllowed.join('\', \'') + '\'].';
        }

        if (fieldValue && fieldValue.length) {
            errorMsg += ' Value `' + JSON.stringify(fieldValue[0]) + '` is provided.';
        }

        return new ResponseError(errorMsg, error.code, error.status);
    }

}
