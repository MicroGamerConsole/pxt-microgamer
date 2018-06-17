//% icon="\uf11b"
//% color="255" weight="100"
namespace MicroGamer {

    /**
     * CPP initialises the MicroGamer board
     */
    //% shim=MicroGamer::init_terminal
    export function init_terminal(): void {
        return;
    }

   /**
     * initialises the MicroGamer board
     */
    //% blockId=oled_init_terminal
    //% block="initialize MicroGamer board"
    //% icon="\uf1ec" 
    export function init(): void {
        init_terminal();
        pins.analogSetPitchPin(AnalogPin.P2)
        return;
    }

   /**
     * Update the display
     */
    //% subcategory=Display
    //% blockId=update_display
    //% block="Update display"
    //% icon="\uf1ec" 
    //% shim=MicroGamer::updateDisplay
    export function updateDisplay(): void {
        return;
    }

   /**
     * Disable display auto-update
     */
    //% subcategory=Display
    //% blockId=disable_display_autoupdate
    //% block="Disable display auto-update"
    //% icon="\uf1ec" 
    //% shim=MicroGamer::disableAutoUpdate
    export function disableAutoUpdate(): void {
        return;
    }

   /**
     * Enable display auto-update
     */
    //% subcategory=Display
    //% blockId=enable_display_autoupdate
    //% block="Enable display auto-update"
    //% icon="\uf1ec" 
    //% shim=MicroGamer::enableAutoUpdate
    export function enableAutoUpdate(): void {
        return;
    }

    /**
     * clears the display
     */
    //% subcategory=Display
    //% blockId=oled_clear_screen
    //% block="clear display"
    //% icon="\uf1ec" 
    //% shim=MicroGamer::clearDisplay
    export function clear(): void {
        return;
    }

    /**
     * prints a string on the MicroGamer display
     * @param text text to display
     */
    //% subcategory=Display
    //% weight=87 blockGap=8
    //% block="show|string %text" 
    //% blockId=oled_print_string
    //% icon="\uf1ec"
    //% shim=MicroGamer::showString
    export function showString(text: string): void {
        console.log("display: " + text);
        return;
    }

    /**
     * prints a number on the MicroGamer display
     * @param number number to display
     */
    //% subcategory=Display
    //% weight=96
    //% blockId=oled_print_number
    //% block="show|number %number" blockGap=8
    //% shim=MicroGamer::showNumber
    export function showNumber(number: number): void {
        console.log("display: " + number);
        return;
    }

    /**
     * Draw a pixel on the MicroGamer display
     * @param x X coordinate of the pixel
     * @param y Y coordinate of the pixel
     */
    //% subcategory=Display
    //% weight=96
    //% blockId=oled_draw_pixel
    //% block="draw pixel x %x| y %y|" blockGap=8
    //% shim=MicroGamer::drawPixel
    export function drawPixel(x: number, y: number): void {
        return;
    }

    /**
     * Draw a circle on the MicroGamer display
     * @param x X coordinate of the center
     * @param y Y coordinate of the center
     * @param r radius of the circle
     */
    //% subcategory=Display
    //% weight=96
    //% blockId=oled_draw_circle
    //% block="draw circle x %x| y %y| radius %radius|" blockGap=8
    //% shim=MicroGamer::drawCircle
    export function drawCircle(x: number, y: number, r:number): void {
        return;
    }

    /**
     * Fill a circle on the MicroGamer display
     * @param x X coordinate of the center
     * @param y Y coordinate of the center
     * @param r radius of the circle
     */
    //% subcategory=Display
    //% weight=96
    //% blockId=oled_fill_circle
    //% block="fill circle x %x| y %y| radius %radius|" blockGap=8
    //% shim=MicroGamer::fillCircle
    export function fillCircle(x: number, y: number, r:number): void {
        return;
    }

    /**
     * Draw a line on the MicroGamer display
     * @param x1 X coordinate of the first point
     * @param y1 Y coordinate of the first point
     * @param x2 X coordinate of the second point
     * @param y2 Y coordinate of the second point
     * @param r radius of the circle
     */
    //% subcategory=Display
    //% weight=96
    //% blockId=oled_draw_line
    //% block="draw line from x1 %x1| y1 %y1| to  x2 %x2| y2 %y2| " blockGap=8
    //% shim=MicroGamer::drawLine
    export function drawLine(x1: number, y1: number, x2:number, y2:number): void {
        return;
    }

    /**
     * Draw a rectangle on the MicroGamer display
     * @param x X coordinate of the top left corner
     * @param y Y coordinate of the top left corner
     * @param width width of the rectangle
     * @param height height of the rectangle
     */
    //% subcategory=Display
    //% weight=96
    //% blockId=oled_draw_rect
    //% block="draw rectangle x %x| y %y| width %width| height %height| " blockGap=8
    //% shim=MicroGamer::drawRect
    export function drawRect(x: number, y: number, width:number, height:number): void {
        return;
    }

    /**
     * Fill a rectangle on the MicroGamer display
     * @param x X coordinate of the top left corner
     * @param y Y coordinate of the top left corner
     * @param width width of the rectangle
     * @param height height of the rectangle
     */
    //% subcategory=Display
    //% weight=96
    //% blockId=oled_fill_rect
    //% block="fill rectangle x %x| y %y| width %width| height %height| " blockGap=8
    //% shim=MicroGamer::fillRect
    export function fillRect(x: number, y: number, width:number, height:number): void {
        return;
    }

    //  Button handling from:
    //   https://github.com/KitronikLtd/pxt-kitronik-zip-64/blob/master/zip64.ts
    // Copyright (c) 2018 Kitronik Ltd 

    /**
     * MicroGamer Button Pins
     */
    export enum MGButtonPins {
        //% block="Up"
        Up = <number>DAL.MICROBIT_ID_IO_P15,
        //% block="Down"
        Down = <number>DAL.MICROBIT_ID_IO_P14,
        //% block="Left"
        Left = <number>DAL.MICROBIT_ID_IO_P16,
        //% block="Right"
        Right = <number>DAL.MICROBIT_ID_IO_P13,
        //% block="X"
        X = <number>DAL.MICROBIT_ID_IO_P0,
        //% block="Y"
        Y = <number>DAL.MICROBIT_ID_IO_P1
    }


     /**
      * MicroGamer Button Events
     */
     export enum MGButtonEvents {
        //% block="down"
        Down = DAL.MICROBIT_BUTTON_EVT_DOWN,
        //% block="up"
        Up = DAL.MICROBIT_BUTTON_EVT_UP,
        //% block="click"
        Click = DAL.MICROBIT_BUTTON_EVT_CLICK
     }

    /**
     * Determines if a MicroGamer button is pressed
     * @param button press to be checked
     */
    //% subcategory=Inputs
    //% blockId="mg_ispressed" block="button %button|is pressed"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% weight=95 blockGap=8
    export function buttonIsPressed(button: MGButtonPins): boolean {
        const pin = <DigitalPin><number>button;
        pins.setPull(pin, PinPullMode.PullUp);
        return pins.digitalReadPin(pin) == 0;
    }

    /**
     * Do something when one of the MicroGamer Buttons is pressed
     * @param button press to be checked
     * @param event happening on the button, eg: click
     */
    //% subcategory=Inputs
    //% blockId="mg_button_press_on_event" block="on button %button|press %event"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% weight=93 blockGap=8
    export function onButtonPress(button: MGButtonPins, event: MGButtonEvents, handler: Action) {
        init();
        control.onEvent(<number>button, <number>event, handler);
    }

}
