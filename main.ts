let Compass = 0
let V2 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    Compass = input.compassHeading()
    while (false) {
        V2 = input.soundLevel()
    }
})
