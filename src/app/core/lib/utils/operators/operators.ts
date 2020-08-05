/**
 * @packageDocumentation
 * @module CoreModule/lib
 * @author luchik
 */
/** */

/*
* Operators
*/
export class Operators {

    constructor() { }

    /**
     * Check if variable a number
     * @param string|number|any val
     */
    static isNumber(val: string | number | any) {
        if ('number' === typeof val) {
            return true;
        }
        if ('string' !== typeof val) {
            return false;
        }
        return /^-?[\d.]+(?:e-?\d+)?$/.test(val);
    }

    /**
     * Copy of 1+ level array of Entities
     *
     * For objects and arrays containing other objects or arrays, copying these objects requires a deep copy.
     * Otherwise, changes made to the nested references will change the data nested in the original object or array.
     *
     * Shallow copy methods:
     * - newArray = Object.assign([], yourArray)
     * - newArray = yourArray.slice()
     * - newArray = Array.from(yourArray)
     * - newArray = [...yourArray]
     * if will consist of object will still have pointers on the objects
     *
     * @param len
     * @param chars
     */
    static cloneArrayOfModels(arrayToClone: Array<any>): Array<any> {
        const result: Array<any> = [];
        let i: number, val: any;

        if (!arrayToClone) {
            return arrayToClone;
        }

        for (i = 0; i < arrayToClone.length; i++) {
            switch (typeof arrayToClone[i]) {
                case 'object':
                    if (arrayToClone[i] instanceof Date) {
                        val = new Date(arrayToClone[i]);
                        break;
                    }
                    if (null === arrayToClone[i]) {
                        val = null;
                        break;
                    }
                    if (arrayToClone[i] instanceof Array) {
                        val = Object.assign([], arrayToClone[i]);
                        break;
                    }
                    val = Object.assign({}, arrayToClone[i]);
                    break;

                case 'function':
                    val = arrayToClone[i];
                    break;
                case 'undefined':
                    val = undefined;
                    break;
                default:
                    val = arrayToClone[i];
            }

            result.push(val);
        }

        return result;
    }

    /**
     * Get url params from the url
     */
    static getJsonQueryParamsFromUrl(url: string): any {
        if (!url) {
            return {};
        }
        const result = {};
        const question = url.indexOf('?');
        let hash = url.indexOf('#');

        if (hash === -1 && question === -1) {
            return {};
        }
        if (hash === -1) {
            hash = url.length;
        }
        const query = question === -1 || hash === question + 1 ? url.substring(hash) :
            url.substring(question + 1, hash);

        query.split('&').forEach(function (part) {
            if (!part) {
                return;
            }
            part = part.split('+').join(' '); // replace every + with space, regexp-free version

            const eq = part.indexOf('=');
            const val = eq > -1 ? decodeURIComponent(part.substr(eq + 1)) : '';
            let key = eq > -1 ? part.substr(0, eq) : part;
            const from = key.indexOf('[');

            if (from === -1) {
                result[decodeURIComponent(key)] = val;
                return;
            }

            const to = key.indexOf(']', from);
            const index = decodeURIComponent(key.substring(from + 1, to));
            key = decodeURIComponent(key.substring(0, from));
            if (!result[key]) {
                result[key] = [];
            }

            if (!index) {
                result[key].push(val);
            } else {
                result[key][index] = val;
            }
        });
        return result;
    }
}

