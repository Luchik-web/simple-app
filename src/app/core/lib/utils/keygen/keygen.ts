/**
 * @packageDocumentation
 * @module CoreModule/lib
 * @author luchik
 */
/** */

/*
* Generate a random uuid.
*
* USAGE: Math.uuid(length, radix)
*   length - the desired number of characters
*   radix  - the number of allowable values for each character.
*
* EXAMPLES:
*   // No arguments  - returns RFC4122, version 4 ID
*   >>> Math.uuid()
*   "92329D39-6F5C-4520-ABFC-AAB64544E172"
*
*   // One argument - returns ID of the specified length
*   >>> Math.uuid(15)     // 15 character ID (default base=62)
*   "VcydxgltxrVZSTV"
*
*   // Two arguments - returns ID of the specified length, and radix. (Radix must be <= 62)
*   >>> Math.uuid(8, 2)  // 8 character ID (base=2)
*   "01001010"
*   >>> Math.uuid(8, 10) // 8 character ID (base=10)
*   "47473046"
*   >>> Math.uuid(8, 16) // 8 character ID (base=16)
*   "098F4D35"
*/
export class Keygen {

    constructor() { }
    /**
     * keygen
     * @param len
     * @param chars
     */
    static keygen(len?: number, chars?: string, radix?: number): string {
        // Private array of chars to use
        len = len || 15;
        const CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        chars = ('string' === typeof chars) && (chars.length > 0) ? chars : CHARS;

        radix = radix || chars.length;

        return Keygen._generator(chars, len, radix);
    }

    /**
     * _generator
     * @param chars
     * @param len
     * @param radix
     */
    static _generator(chars: string, len: number, radix: number): string {
        const uuid: string[] = [];

        if (len) {
            // Compact form
            for (let i = 0; i < len; i++) {
                // tslint:disable-next-line: no-bitwise
                uuid[i] = chars[0 | Math.random() * radix];
            }
        } else {
            // rfc4122, version 4 form
            let r: number;

            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';

            // Fill in random data.  At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (let i = 0; i < 36; i++) {
                if (uuid[i]) {
                    return;
                }
                // tslint:disable-next-line: no-bitwise
                r = 0 | Math.random() * 16;
                // tslint:disable-next-line: no-bitwise
                uuid[i] = chars[(i === 19) ? ((r & 0x3) | 0x8) : (r & 0xf)];
            }
        }

        return uuid.join('');
    }
}
