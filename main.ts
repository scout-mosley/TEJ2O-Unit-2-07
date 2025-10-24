/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: scout mosley
 * Created on: Oct 2025
 * This program adds one to counter when a is pressed.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

let cookiesPressed = 0

// add 1
input.onButtonPressed(Button.A, function () {
    cookiesPressed += 1
    basic.clearScreen()
    basic.showNumber(cookiesPressed)
})