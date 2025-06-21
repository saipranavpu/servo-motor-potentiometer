let pot = 0
let servo = 0
basic.forever(function () {
    pot = pins.analogReadPin(AnalogPin.P0)
    servo = Math.map(pot, 0, 1023, 0, 180)
    motor.servo(motor.Servos.S1, servo)
    basic.pause(500)
})
