/**
 * @packageDocumentation
 * @module CoreModule/lib
 * @author luchik
 */
/** */

/**
 * Copy text to clipboard
 */
export class CopyToClipboard {
    /**
     * Copy text to clipboard
     * @param string val
     * @returns void
     */
    public static copy(val: string): void {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
}
