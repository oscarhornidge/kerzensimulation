let Rot = 0
basic.forever(function () {
    for (let index = 0; index < 150; index++) {
        basic.setLedColor(0xff0000)
        Rot = randint(150, 255)
    }
    for (let index = 0; index < 300; index++) {
        basic.setLedColor(randint(Colors.Orange, Colors.Yellow))
    }
})
