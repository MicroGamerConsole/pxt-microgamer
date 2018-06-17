// tests go here; this will not be compiled when this package is used as a library

MicroGamer.init()
MicroGamer.showString("hello, world!")
MicroGamer.showString("counter:")
let item = 0
basic.forever(() => {
    basic.pause(1000)
    item += 1
    MicroGamer.showNumber(item)
})

