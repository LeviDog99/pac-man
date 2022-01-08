
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace pacman {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 0
     * @param s describe parameter here, eg: "ghosts"
     * @param e describe parameter here
     */
    //% block
    export function ghost(n: number, s: string, e: MyEnum): void {
        // Add code here
        basic.showIcon(IconNames.Ghost)
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 0
     */
    //% block
    export function pacman(value: number): number {
        return value <= 1 ? value : pacman(value -1) + pacman(value - 2);
    }
}
