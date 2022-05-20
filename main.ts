pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {
    n += 1
})
function vitesse () {
    n = 0
    basic.pause(1000)
    mes = n
}
function affvit () {
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowNumber(mes, 0, 1)
    v = mes * 1.875 / 6
    I2C_LCD1602.ShowNumber(v, 0, 0)
    if (v < 10) {
        I2C_LCD1602.ShowString("km/h", 3, 0)
    }
    if (v >= 10) {
        I2C_LCD1602.ShowString("km/h", 4, 0)
    }
}
let v = 0
let mes = 0
let n = 0
I2C_LCD1602.LcdInit(39)
basic.forever(function () {
    vitesse()
    affvit()
})
