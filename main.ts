function affdist () {
    dold = v / 3.6 + d
    dold = Math.round(dold)
    basic.pause(100)
    dnew = v / 36
    dnew = Math.round(dnew)
    d = dnew + dold
    if (d < 10) {
        I2C_LCD1602.ShowString(" ", 0, 1)
        I2C_LCD1602.ShowNumber(d, 1, 1)
        I2C_LCD1602.ShowString("m     ", 2, 2)
    } else {
        I2C_LCD1602.ShowNumber(d, 0, 1)
    }
    if (d >= 100) {
        I2C_LCD1602.ShowString("m       ", 3, 3)
    }
}
function vitesse () {
    n = 0
    basic.pause(1000)
    mes = n
}
input.onButtonPressed(Button.A, function () {
    d = 0
})
function affvit () {
    v = mes * 1.875 / 6
    if (v == 0) {
        I2C_LCD1602.ShowString("0.00", 0, 0)
    } else {
        if (v < 10) {
            I2C_LCD1602.ShowString(" ", 0, 0)
            I2C_LCD1602.ShowNumber(v, 1, 0)
        } else {
            I2C_LCD1602.ShowNumber(v, 0, 0)
        }
        I2C_LCD1602.ShowString("km/h", 4, 0)
    }
}
pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {
    n += 1
})
let mes = 0
let n = 0
let dnew = 0
let v = 0
let dold = 0
let d = 0
I2C_LCD1602.LcdInit(39)
d = 0
basic.forever(function () {
    vitesse()
    affvit()
    affdist()
})
