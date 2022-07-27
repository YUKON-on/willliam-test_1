input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (input.lightLevel()))
    basic.showIcon(IconNames.Heart)
})
basic.showLeds(`
    # . # . #
    # # . # #
    # # # # #
    # # . # #
    # . # . #
    `)
