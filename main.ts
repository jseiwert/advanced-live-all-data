basic.forever(function () {
    led.toggle(4, 4)
    serial.writeValue("Light", input.lightLevel())
    serial.writeValue("Sound", input.soundLevel())
    serial.writeValue("Temp C", input.temperature())
    serial.writeValue("Heading", input.compassHeading())
    serial.writeValue("Acceleration", input.acceleration(Dimension.Strength))
    serial.writeNumbers([
    input.lightLevel(),
    input.soundLevel(),
    input.temperature(),
    input.compassHeading(),
    input.acceleration(Dimension.Strength)
    ])
    basic.pause(500)
})
