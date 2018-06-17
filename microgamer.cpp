#include "pxt.h"
#include "Adafruit_SSD1306.h"
using namespace pxt;

namespace MicroGamer {
    #define SSD1306_ADDRESS 0x78
    #undef printf
    #define WIDTH (128)
    #define HEIGHT (64)

    MicroBitI2C i2c(I2C_SDA0, I2C_SCL0);
    Adafruit_SSD1306_I2c *oled;
    bool auto_update = true;

    //%
    void init_terminal(){
        if (oled != NULL) {
            delete oled;
        }
        oled = new Adafruit_SSD1306_I2c(i2c, SSD1306_ADDRESS, HEIGHT, WIDTH);
        oled->clearDisplay();
        oled->display();
        oled->setTextCursor(0, 0);

        // From https://github.com/KitronikLtd/pxt-kitronik-zip-64/blob/master/zip64.cpp
        // Copyright (c) 2018 Kitronik Ltd 
        // This function sets all the buttons to actually appear as buttons on the micro:bit
#define ALLOC_PIN_BUTTON(id) new MicroBitButton(getPin(id)->name, id, MICROBIT_BUTTON_ALL_EVENTS, PullUp);
        ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P0)
        ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P1)
        ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P13)
	ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P14)
	ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P15)
	ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P16)
#undef ALLOC_PIN_BUTTON
    }

    //%
    void disableAutoUpdate(){
        auto_update = false;
    }

    //%
    void enableAutoUpdate(){
        auto_update = true;
    }

    //%
    void updateDisplay(){
        oled->display();
    }

    //%
    void showString(StringData *text) {
        oled->printf("%s\n", text->data);
        if (auto_update) {
            updateDisplay();
        }
    }

    //%
    void showNumber (int number) {
        oled->printf("%d\n", number);
        if (auto_update) {
            updateDisplay();
        }
    }

    //%
    void clearDisplay(){
        oled->clearDisplay();
        if (auto_update) {
            updateDisplay();
        }
    }

    //%
    void drawPixel(int x, int y){
        oled->drawPixel(x, y, WHITE);
        if (auto_update) {
            updateDisplay();
        }
    }

    //%
    void drawCircle(int x, int y, int r){
        oled->drawCircle(x, y, r, WHITE);
        if (auto_update) {
            updateDisplay();
        }
    }

    //%
    void fillCircle(int x, int y, int r){
        oled->fillCircle(x, y, r, WHITE);
        if (auto_update) {
            updateDisplay();
        }
    }

    //%
    void drawLine(int x0, int y0, int x1, int y1){
        oled->drawLine(x0, y0, x1, y1, WHITE);
        if (auto_update) {
            updateDisplay();
        }
    }

    //%
    void fillRect(int x, int y, int w, int h){
        oled->fillRect(x, y, w, h, WHITE);
         if (auto_update) {
            updateDisplay();
        }
   }

    //%
    void drawRect(int x, int y, int w, int h){
        oled->drawRect(x, y, w, h, WHITE);
        if (auto_update) {
            updateDisplay();
        }
    }

    //%
    void fillRoundRect(int x, int y, int w, int h, int r){
        oled->fillRoundRect(x, y, w, h, r, WHITE);
        if (auto_update) {
            updateDisplay();
        }
    }

    //%
    void drawRoundRect(int x, int y, int w, int h, int r){
    	oled->drawRoundRect(x, y, w, h, r, WHITE);
        if (auto_update) {
            updateDisplay();
        }
    }

    //%
    void drawTriangle(int x0, int y0, int x1, int y1, int x2, int y2){
    	oled->drawTriangle(x0, y0, x1, y1, x2, y2, WHITE);
        if (auto_update) {
            updateDisplay();
        }
    }

    //%
    void fillTriangle(int x0, int y0, int x1, int y1, int x2, int y2){
    	oled->fillTriangle(x0, y0, x1, y1, x2, y2, WHITE);
        if (auto_update) {
            updateDisplay();
        }
    }

    #define printf(...) uBit.serial.printf(__VA_ARGS__)

}
