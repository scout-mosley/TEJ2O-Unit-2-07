/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Scout Mosley
 * Created on: Oct 2025
 * This program adds one to counter when a is pressed.
*/

//clean up
basic.clearScreen()
basic.showIcon(IconNames.Happy)

let cookiesPressed = 0

// add 1
input.onButtonPressed(Button.A, function () {
    cookiesPressed += 1
    basic.clearScreen()
    basic.showNumber(cookiesPressed)
})

// reset score
input.onButtonPressed(Button.B, function () {
    cookiesPressed = 0
    basic.clearScreen()
    basic.showNumber(cookiesPressed)
})
