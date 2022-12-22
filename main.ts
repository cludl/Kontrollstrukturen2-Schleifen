input.onButtonPressed(Button.A, function () {
    while (x < 12) {
        if (x < 10) {
            len = 1
        } else {
            len = 2
        }
        basic.showNumber(x)
        basic.pause(100)
        basic.showNumber(len)
        basic.pause(100)
        basic.clearScreen()
        x += 1
    }
})
input.onButtonPressed(Button.B, function () {
    while (x < 9) {
        x += 1
        if (x % 2 == 0) {
            basic.showString("G")
        } else {
            basic.showNumber(x)
        }
    }
})
let len = 0
let x = 0
x = 2
len = 0
