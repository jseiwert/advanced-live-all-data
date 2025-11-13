def on_forever():
    led.toggle(4, 4)
    serial.write_value("Light", input.light_level())
    basic.pause(500)
basic.forever(on_forever)
