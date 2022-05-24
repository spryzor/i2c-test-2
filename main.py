def affdist():
    global d
    d = v / 3.6 * 1
    if d < 10:
        I2C_LCD1602.show_string(" ", 0, 1)
        I2C_LCD1602.show_number(d, 1, 1)
    else:
        I2C_LCD1602.show_number(d, 0, 1)
    I2C_LCD1602.show_string("m               ", 4, 4)
def vitesse():
    global n, mes
    n = 0
    basic.pause(1000)
    mes = n
def affvit():
    global v
    v = mes * 1.875 / 6
    if v < 10:
        I2C_LCD1602.show_string(" ", 0, 0)
        I2C_LCD1602.show_number(v, 1, 0)
    else:
        I2C_LCD1602.show_number(v, 0, 0)
    I2C_LCD1602.show_string("km/h", 4, 0)

def on_pulsed_p0_high():
    global n
    n += 1
pins.on_pulsed(DigitalPin.P0, PulseValue.HIGH, on_pulsed_p0_high)

mes = 0
n = 0
v = 0
d = 0
I2C_LCD1602.lcd_init(39)

def on_forever():
    vitesse()
    affvit()
    affdist()
basic.forever(on_forever)
