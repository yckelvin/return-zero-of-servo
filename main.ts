input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
    OLED.writeStringNewLine("Return to zero")
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 90)
    OLED.writeStringNewLine("Turn 90 degree")
})
basic.showNumber(0)
OLED.init(128, 64)
basic.showIcon(IconNames.Yes)
