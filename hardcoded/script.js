let blackmage = document.querySelector('.blackmage')
// let blackmageWalk = document.querySelector('.blackmage.walk')
// let blackmageCast = document.querySelector('.blackmage.cast')

let pixelUnit = 2
let pixelHeight = pixelUnit * 2

const restPattern = [{
        top: 0,
        left: pixelUnit * 28 ,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 2,
        left: pixelUnit * 24,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 2,
        left: pixelUnit * 28,
        width: pixelUnit * 4,
        color: 'orange'
    }, {
        top: pixelUnit * 2,
        left: pixelUnit * 32,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 4,
        left: pixelUnit * 22,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 4,
        left: pixelUnit * 24,
        width: pixelUnit * 6,
        color: 'orange'
    }, {
        top: pixelUnit * 4,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'greenish'
    }, {
        top: pixelUnit * 4,
        left: pixelUnit * 32,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 6,
        left: pixelUnit * 18,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 6,
        left: pixelUnit * 22,
        width: pixelUnit * 6,
        color: 'orange'
    }, {
        top: pixelUnit * 6,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'greenish'
    }, {
        top: pixelUnit * 6,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 8,
        left: pixelUnit * 14,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 8,
        left: pixelUnit * 18,
        width: pixelUnit * 8,
        color: 'orange'
    }, {
        top: pixelUnit * 8,
        left: pixelUnit * 26,
        width: pixelUnit * 4,
        color: 'greenish'
    }, {
        top: pixelUnit * 8,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 10,
        left: pixelUnit * 2,
        width: pixelUnit * 12,
        color: 'black'
    }, {
        top: pixelUnit * 10,
        left: pixelUnit * 14,
        width: pixelUnit * 8,
        color: 'orange'
    }, {
        top: pixelUnit * 10,
        left: pixelUnit * 22,
        width: pixelUnit * 6,
        color: 'greenish'
    }, {
        top: pixelUnit * 10,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 12,
        left: pixelUnit * 0,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 12,
        left: pixelUnit * 2,
        width: pixelUnit * 16,
        color: 'orange'
    }, {
        top: pixelUnit * 12,
        left: pixelUnit * 18,
        width: pixelUnit * 10,
        color: 'greenish'
    }, {
        top: pixelUnit * 12,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 14,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 14,
        left: pixelUnit * 4,
        width: pixelUnit * 8,
        color: 'greenish'
    }, {
        top: pixelUnit * 14,
        left: pixelUnit * 12,
        width: pixelUnit * 8,
        color: 'orange'
    }, {
        top: pixelUnit * 14,
        left: pixelUnit * 20,
        width: pixelUnit * 8,
        color: 'greenish'
    }, {
        top: pixelUnit * 14,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 16,
        left: pixelUnit * 4,
        width: pixelUnit * 6,
        color: 'black'
    }, {
        top: pixelUnit * 16,
        left: pixelUnit * 10,
        width: pixelUnit * 8,
        color: 'greenish'
    }, {
        top: pixelUnit * 16,
        left: pixelUnit * 18,
        width: pixelUnit * 6,
        color: 'orange'
    }, {
        top: pixelUnit * 16,
        left: pixelUnit * 24,
        width: pixelUnit * 2,
        color: 'greenish'
    }, {
        top: pixelUnit * 16,
        left: pixelUnit * 26,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 18,
        left: pixelUnit * 10,
        width: pixelUnit * 6,
        color: 'black'
    }, {
        top: pixelUnit * 18,
        left: pixelUnit * 16,
        width: pixelUnit * 12,
        color: 'greenish'
    }, {
        top: pixelUnit * 18,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 20,
        left: pixelUnit * 8,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 20,
        left: pixelUnit * 10,
        width: pixelUnit * 2,
        color: 'orange'
    }, {
        top: pixelUnit * 20,
        left: pixelUnit * 12,
        width: pixelUnit * 10,
        color: 'black'
    }, {
        top: pixelUnit * 20,
        left: pixelUnit * 22,
        width: pixelUnit * 8,
        color: 'greenish'
    }, {
        top: pixelUnit * 20,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 6,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 10,
        width: pixelUnit * 2,
        color: 'orange'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 12,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 16,
        width: pixelUnit * 2,
        color: 'orange'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 18,
        width: pixelUnit * 8,
        color: 'black'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 26,
        width: pixelUnit * 6,
        color: 'greenish'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 32,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 4,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 6,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 8,
        width: pixelUnit * 8,
        color: 'black'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 16,
        width: pixelUnit * 2,
        color: 'orange'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 18,
        width: pixelUnit * 8,
        color: 'black'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 26,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 28,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 26,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 26,
        left: pixelUnit * 4,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 26,
        left: pixelUnit * 6,
        width: pixelUnit * 22,
        color: 'black'
    }, {
        top: pixelUnit * 26,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 26,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 28,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 28,
        left: pixelUnit * 4,
        width: pixelUnit * 6,
        color: 'blue'
    }, {
        top: pixelUnit * 28,
        left: pixelUnit * 10,
        width: pixelUnit * 6,
        color: 'black'
    }, {
        top: pixelUnit * 28,
        left: pixelUnit * 16,
        width: pixelUnit * 14,
        color: 'blue'
    }, {
        top: pixelUnit * 28,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 30,
        left: pixelUnit * 2,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 30,
        left: pixelUnit * 6,
        width: pixelUnit * 14,
        color: 'blue'
    }, {
        top: pixelUnit * 30,
        left: pixelUnit * 20,
        width: pixelUnit * 6,
        color: 'black'
    }, {
        top: pixelUnit * 30,
        left: pixelUnit * 26,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 30,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 0,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 2,
        width: pixelUnit * 4,
        color: 'orange'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 6,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 8,
        width: pixelUnit * 10,
        color: 'blue'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 18,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 22,
        width: pixelUnit * 8,
        color: 'blue'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 0,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 2,
        width: pixelUnit * 4,
        color: 'orange'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 6,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 8,
        width: pixelUnit * 8,
        color: 'blue'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 16,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 18,
        width: pixelUnit * 4,
        color: 'orange'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 22,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 24,
        width: pixelUnit * 6,
        color: 'blue'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 2,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 6,
        width: pixelUnit * 4,
        color: 'blue'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 10,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 12,
        width: pixelUnit * 4,
        color: 'blue'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 16,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 18,
        width: pixelUnit * 4,
        color: 'orange'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 22,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 24,
        width: pixelUnit * 6,
        color: 'blue'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 4,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 6,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 8,
        width: pixelUnit * 4,
        color: 'blue'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 12,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 16,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 18,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 22,
        width: pixelUnit * 8,
        color: 'blue'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 40,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 40,
        left: pixelUnit * 4,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 40,
        left: pixelUnit * 6,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 40,
        left: pixelUnit * 8,
        width: pixelUnit * 10,
        color: 'blue'
    }, {
        top: pixelUnit * 40,
        left: pixelUnit * 18,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 40,
        left: pixelUnit * 22,
        width: pixelUnit * 8,
        color: 'blue'
    }, {
        top: pixelUnit * 40,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 4,
        width: pixelUnit * 4,
        color: 'blue'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 8,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 10,
        width: pixelUnit * 8,
        color: 'blue'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 18,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 22,
        width: pixelUnit * 8,
        color: 'blue'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 4,
        width: pixelUnit * 6,
        color: 'blue'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 10,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 12,
        width: pixelUnit * 8,
        color: 'blue'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 20,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 22,
        width: pixelUnit * 8,
        color: 'black'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 4,
        width: pixelUnit * 8,
        color: 'blue'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 12,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 16,
        width: pixelUnit * 6,
        color: 'blue'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 22,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 24,
        width: pixelUnit * 4,
        color: 'blue'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 32,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 0,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 2,
        width: pixelUnit * 22,
        color: 'blue'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 24,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 28,
        width: pixelUnit * 6,
        color: 'blue'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 34,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 50,
        left: pixelUnit * 2,
        width: pixelUnit * 22,
        color: 'black'
    }, {
        top: pixelUnit * 50,
        left: pixelUnit * 28,
        width: pixelUnit * 6,
        color: 'black'
    }]
const walkPattern = [{
        top: 0,
        left: pixelUnit * 28 ,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 2,
        left: pixelUnit * 24,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 2,
        left: pixelUnit * 28,
        width: pixelUnit * 4,
        color: 'orange'
    }, {
        top: pixelUnit * 2,
        left: pixelUnit * 32,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 4,
        left: pixelUnit * 22,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 4,
        left: pixelUnit * 24,
        width: pixelUnit * 6,
        color: 'orange'
    }, {
        top: pixelUnit * 4,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'greenish'
    }, {
        top: pixelUnit * 4,
        left: pixelUnit * 32,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 6,
        left: pixelUnit * 18,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 6,
        left: pixelUnit * 22,
        width: pixelUnit * 6,
        color: 'orange'
    }, {
        top: pixelUnit * 6,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'greenish'
    }, {
        top: pixelUnit * 6,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 8,
        left: pixelUnit * 14,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 8,
        left: pixelUnit * 18,
        width: pixelUnit * 8,
        color: 'orange'
    }, {
        top: pixelUnit * 8,
        left: pixelUnit * 26,
        width: pixelUnit * 4,
        color: 'greenish'
    }, {
        top: pixelUnit * 8,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 10,
        left: pixelUnit * 2,
        width: pixelUnit * 12,
        color: 'black'
    }, {
        top: pixelUnit * 10,
        left: pixelUnit * 14,
        width: pixelUnit * 8,
        color: 'orange'
    }, {
        top: pixelUnit * 10,
        left: pixelUnit * 22,
        width: pixelUnit * 6,
        color: 'greenish'
    }, {
        top: pixelUnit * 10,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 12,
        left: pixelUnit * 0,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 12,
        left: pixelUnit * 2,
        width: pixelUnit * 16,
        color: 'orange'
    }, {
        top: pixelUnit * 12,
        left: pixelUnit * 18,
        width: pixelUnit * 10,
        color: 'greenish'
    }, {
        top: pixelUnit * 12,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 14,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 14,
        left: pixelUnit * 4,
        width: pixelUnit * 8,
        color: 'greenish'
    }, {
        top: pixelUnit * 14,
        left: pixelUnit * 12,
        width: pixelUnit * 8,
        color: 'orange'
    }, {
        top: pixelUnit * 14,
        left: pixelUnit * 20,
        width: pixelUnit * 8,
        color: 'greenish'
    }, {
        top: pixelUnit * 14,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 16,
        left: pixelUnit * 4,
        width: pixelUnit * 6,
        color: 'black'
    }, {
        top: pixelUnit * 16,
        left: pixelUnit * 10,
        width: pixelUnit * 8,
        color: 'greenish'
    }, {
        top: pixelUnit * 16,
        left: pixelUnit * 18,
        width: pixelUnit * 6,
        color: 'orange'
    }, {
        top: pixelUnit * 16,
        left: pixelUnit * 24,
        width: pixelUnit * 2,
        color: 'greenish'
    }, {
        top: pixelUnit * 16,
        left: pixelUnit * 26,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 18,
        left: pixelUnit * 10,
        width: pixelUnit * 6,
        color: 'black'
    }, {
        top: pixelUnit * 18,
        left: pixelUnit * 16,
        width: pixelUnit * 12,
        color: 'greenish'
    }, {
        top: pixelUnit * 18,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 20,
        left: pixelUnit * 8,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 20,
        left: pixelUnit * 10,
        width: pixelUnit * 2,
        color: 'orange'
    }, {
        top: pixelUnit * 20,
        left: pixelUnit * 12,
        width: pixelUnit * 10,
        color: 'black'
    }, {
        top: pixelUnit * 20,
        left: pixelUnit * 22,
        width: pixelUnit * 8,
        color: 'greenish'
    }, {
        top: pixelUnit * 20,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 6,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 10,
        width: pixelUnit * 2,
        color: 'orange'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 12,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 16,
        width: pixelUnit * 2,
        color: 'orange'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 18,
        width: pixelUnit * 8,
        color: 'black'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 26,
        width: pixelUnit * 6,
        color: 'greenish'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 32,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 4,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 6,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 8,
        width: pixelUnit * 8,
        color: 'black'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 16,
        width: pixelUnit * 2,
        color: 'orange'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 18,
        width: pixelUnit * 8,
        color: 'black'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 26,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 28,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 26,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 26,
        left: pixelUnit * 4,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 26,
        left: pixelUnit * 6,
        width: pixelUnit * 22,
        color: 'black'
    }, {
        top: pixelUnit * 26,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 26,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 28,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 28,
        left: pixelUnit * 4,
        width: pixelUnit * 6,
        color: 'blue'
    }, {
        top: pixelUnit * 28,
        left: pixelUnit * 10,
        width: pixelUnit * 6,
        color: 'black'
    }, {
        top: pixelUnit * 28,
        left: pixelUnit * 16,
        width: pixelUnit * 14,
        color: 'blue'
    }, {
        top: pixelUnit * 28,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 30,
        left: pixelUnit * 2,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 30,
        left: pixelUnit * 6,
        width: pixelUnit * 14,
        color: 'blue'
    }, {
        top: pixelUnit * 30,
        left: pixelUnit * 20,
        width: pixelUnit * 6,
        color: 'black'
    }, {
        top: pixelUnit * 30,
        left: pixelUnit * 26,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 30,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 0,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 2,
        width: pixelUnit * 4,
        color: 'orange'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 6,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 8,
        width: pixelUnit * 10,
        color: 'blue'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 18,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 22,
        width: pixelUnit * 8,
        color: 'blue'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 0,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 2,
        width: pixelUnit * 4,
        color: 'orange'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 6,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 8,
        width: pixelUnit * 4,
        color: 'blue'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 12,
        width: pixelUnit * 8,
        color: 'black'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 20,
        width: pixelUnit * 10,
        color: 'blue'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 2,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 6,
        width: pixelUnit * 4,
        color: 'blue'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 10,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 12,
        width: pixelUnit * 4,
        color: 'orange'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 16,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 18,
        width: pixelUnit * 12,
        color: 'blue'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 4,
        width: pixelUnit * 6,
        color: 'blue'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 10,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 12,
        width: pixelUnit * 4,
        color: 'orange'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 16,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 18,
        width: pixelUnit * 12,
        color: 'blue'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 40,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 40,
        left: pixelUnit * 4,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 40,
        left: pixelUnit * 6,
        width: pixelUnit * 12,
        color: 'black'
    }, {
        top: pixelUnit * 40,
        left: pixelUnit * 18,
        width: pixelUnit * 10,
        color: 'blue'
    }, {
        top: pixelUnit * 40,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 4,
        width: pixelUnit * 8,
        color: 'blue'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 12,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 14,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 16,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 20,
        width: pixelUnit * 8,
        color: 'blue'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 28,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 0,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 2,
        width: pixelUnit * 4,
        color: 'blue'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 6,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 10,
        width: pixelUnit * 8,
        color: 'blue'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 18,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 20,
        width: pixelUnit * 8,
        color: 'blue'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 32,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 0,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 4,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 6,
        width: pixelUnit * 4,
        color: 'orange'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 10,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 12,
        width: pixelUnit * 8,
        color: 'blue'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 20,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 22,
        width: pixelUnit * 4,
        color: 'blue'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 26,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 28,
        width: pixelUnit * 4,
        color: 'blue'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 32,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 4,
        width: pixelUnit * 8,
        color: 'orange'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 12,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 14,
        width: pixelUnit * 8,
        color: 'blue'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 22,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 26,
        width: pixelUnit * 8,
        color: 'blue'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 34,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 50,
        left: pixelUnit * 4,
        width: pixelUnit * 8,
        color: 'black'
    }, {
        top: pixelUnit * 50,
        left: pixelUnit * 14,
        width: pixelUnit * 8,
        color: 'black'
    }, {
        top: pixelUnit * 50,
        left: pixelUnit * 26,
        width: pixelUnit * 8,
        color: 'black'
    }]
const castPattern =[{
        top: 0,
        left: pixelUnit * 30 ,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 2,
        left: pixelUnit * 26,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 2,
        left: pixelUnit * 30,
        width: pixelUnit * 4,
        color: 'orange'
    }, {
        top: pixelUnit * 2,
        left: pixelUnit * 34,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 4,
        left: pixelUnit * 24,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 4,
        left: pixelUnit * 26,
        width: pixelUnit * 6,
        color: 'orange'
    }, {
        top: pixelUnit * 4,
        left: pixelUnit * 32,
        width: pixelUnit * 2,
        color: 'greenish'
    }, {
        top: pixelUnit * 4,
        left: pixelUnit * 34,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 6,
        left: pixelUnit * 20,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 6,
        left: pixelUnit * 24,
        width: pixelUnit * 6,
        color: 'orange'
    }, {
        top: pixelUnit * 6,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'greenish'
    }, {
        top: pixelUnit * 6,
        left: pixelUnit * 32,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 8,
        left: pixelUnit * 16,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 8,
        left: pixelUnit * 20,
        width: pixelUnit * 8,
        color: 'orange'
    }, {
        top: pixelUnit * 8,
        left: pixelUnit * 28,
        width: pixelUnit * 4,
        color: 'greenish'
    }, {
        top: pixelUnit * 8,
        left: pixelUnit * 32,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 10,
        left: pixelUnit * 4,
        width: pixelUnit * 12,
        color: 'black'
    }, {
        top: pixelUnit * 10,
        left: pixelUnit * 16,
        width: pixelUnit * 8,
        color: 'orange'
    }, {
        top: pixelUnit * 10,
        left: pixelUnit * 24,
        width: pixelUnit * 6,
        color: 'greenish'
    }, {
        top: pixelUnit * 10,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 12,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 12,
        left: pixelUnit * 4,
        width: pixelUnit * 16,
        color: 'orange'
    }, {
        top: pixelUnit * 12,
        left: pixelUnit * 20,
        width: pixelUnit * 10,
        color: 'greenish'
    }, {
        top: pixelUnit * 12,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 14,
        left: pixelUnit * 4,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 14,
        left: pixelUnit * 6,
        width: pixelUnit * 8,
        color: 'greenish'
    }, {
        top: pixelUnit * 14,
        left: pixelUnit * 14,
        width: pixelUnit * 8,
        color: 'orange'
    }, {
        top: pixelUnit * 14,
        left: pixelUnit * 22,
        width: pixelUnit * 8,
        color: 'greenish'
    }, {
        top: pixelUnit * 14,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 16,
        left: pixelUnit * 6,
        width: pixelUnit * 6,
        color: 'black'
    }, {
        top: pixelUnit * 16,
        left: pixelUnit * 12,
        width: pixelUnit * 6,
        color: 'greenish'
    }, {
        top: pixelUnit * 16,
        left: pixelUnit * 18,
        width: pixelUnit * 8,
        color: 'orange'
    }, {
        top: pixelUnit * 16,
        left: pixelUnit * 26,
        width: pixelUnit * 2,
        color: 'greenish'
    }, {
        top: pixelUnit * 16,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 18,
        left: pixelUnit * 12,
        width: pixelUnit * 6,
        color: 'black'
    }, {
        top: pixelUnit * 18,
        left: pixelUnit * 18,
        width: pixelUnit * 12,
        color: 'greenish'
    }, {
        top: pixelUnit * 18,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 20,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 20,
        left: pixelUnit * 10,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 20,
        left: pixelUnit * 12,
        width: pixelUnit * 2,
        color: 'orange'
    }, {
        top: pixelUnit * 20,
        left: pixelUnit * 14,
        width: pixelUnit * 10,
        color: 'black'
    }, {
        top: pixelUnit * 20,
        left: pixelUnit * 24,
        width: pixelUnit * 8,
        color: 'greenish'
    }, {
        top: pixelUnit * 20,
        left: pixelUnit * 32,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 0,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'orange'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 4,
        width: pixelUnit * 8,
        color: 'black'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 12,
        width: pixelUnit * 2,
        color: 'orange'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 14,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 18,
        width: pixelUnit * 2,
        color: 'orange'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 20,
        width: pixelUnit * 8,
        color: 'black'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 28,
        width: pixelUnit * 6,
        color: 'greenish'
    }, {
        top: pixelUnit * 22,
        left: pixelUnit * 34,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 0,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 2,
        width: pixelUnit * 4,
        color: 'orange'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 6,
        width: pixelUnit * 4,
        color: 'blue'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 10,
        width: pixelUnit * 8,
        color: 'black'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 18,
        width: pixelUnit * 2,
        color: 'orange'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 20,
        width: pixelUnit * 8,
        color: 'black'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 24,
        left: pixelUnit * 30,
        width: pixelUnit * 4,
        color: 'black'
    },  {
        top: pixelUnit * 26,
        left: pixelUnit * 0,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 26,
        left: pixelUnit * 2,
        width: pixelUnit * 4,
        color: 'orange'
    }, {
        top: pixelUnit * 26,
        left: pixelUnit * 6,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 26,
        left: pixelUnit * 8,
        width: pixelUnit * 22,
        color: 'black'
    }, {
        top: pixelUnit * 26,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 26,
        left: pixelUnit * 32,
        width: pixelUnit * 2,
        color: 'black'
    },{
        top: pixelUnit * 28,
        left: pixelUnit * 2,
        width: pixelUnit * 18,
        color: 'black'
    }, {
        top: pixelUnit * 28,
        left: pixelUnit * 20,
        width: pixelUnit * 8,
        color: 'blue'
    }, {
        top: pixelUnit * 28,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 28,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 28,
        left: pixelUnit * 32,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 30,
        left: pixelUnit * 0,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 30,
        left: pixelUnit * 2,
        width: pixelUnit * 4,
        color: 'orange'
    }, {
        top: pixelUnit * 30,
        left: pixelUnit * 6,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 30,
        left: pixelUnit * 8,
        width: pixelUnit * 12,
        color: 'blue'
    }, {
        top: pixelUnit * 30,
        left: pixelUnit * 20,
        width: pixelUnit * 6,
        color: 'black'
    }, {
        top: pixelUnit * 30,
        left: pixelUnit * 26,
        width: pixelUnit * 6,
        color: 'blue'
    }, {
        top: pixelUnit * 30,
        left: pixelUnit * 32,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 0,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 2,
        width: pixelUnit * 4,
        color: 'orange'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 6,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 8,
        width: pixelUnit * 22,
        color: 'blue'
    }, {
        top: pixelUnit * 32,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 0,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'orange'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 4,
        width: pixelUnit * 4,
        color: 'black'
    },{
        top: pixelUnit * 34,
        left: pixelUnit * 8,
        width: pixelUnit * 22,
        color: 'blue'
    }, {
        top: pixelUnit * 34,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 2,
        width: pixelUnit * 6,
        color: 'black'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 8,
        width: pixelUnit * 20,
        color: 'blue'
    }, {
        top: pixelUnit * 36,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 4,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 6,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 8,
        width: pixelUnit * 20,
        color: 'blue'
    }, {
        top: pixelUnit * 38,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 40,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 40,
        left: pixelUnit * 4,
        width: pixelUnit * 4,
        color: 'blue'
    }, {
        top: pixelUnit * 40,
        left: pixelUnit * 8,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 40,
        left: pixelUnit * 10,
        width: pixelUnit * 18,
        color: 'blue'
    }, {
        top: pixelUnit * 40,
        left: pixelUnit * 28,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 4,
        width: pixelUnit * 4,
        color: 'blue'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 8,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 10,
        width: pixelUnit * 20,
        color: 'blue'
    }, {
        top: pixelUnit * 42,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 0,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 4,
        width: pixelUnit * 8,
        color: 'black'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 12,
        width: pixelUnit * 18,
        color: 'blue'
    }, {
        top: pixelUnit * 44,
        left: pixelUnit * 30,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 2,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 4,
        width: pixelUnit * 4,
        color: 'orange'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 8,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 10,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 12,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 14,
        width: pixelUnit * 18,
        color: 'blue'
    }, {
        top: pixelUnit * 46,
        left: pixelUnit * 32,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 0,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 2,
        width: pixelUnit * 8,
        color: 'orange'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 10,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 12,
        width: pixelUnit * 2,
        color: 'blue'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 14,
        width: pixelUnit * 4,
        color: 'black'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 18,
        width: pixelUnit * 16,
        color: 'blue'
    }, {
        top: pixelUnit * 48,
        left: pixelUnit * 34,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 50,
        left: pixelUnit * 2,
        width: pixelUnit * 8,
        color: 'black'
    }, {
        top: pixelUnit * 50,
        left: pixelUnit * 12,
        width: pixelUnit * 2,
        color: 'black'
    }, {
        top: pixelUnit * 50,
        left: pixelUnit * 18,
        width: pixelUnit * 16,
        color: 'black'
    }, ]
console.log(castPattern)
function generatePattern(pattern) {
    let markup = "";
    pattern.forEach(element => {
        markup = markup.concat(`<div style="top: ${element.top}px; left: ${element.left}px; width: ${element.width}px; height: ${pixelHeight}px" class="${element.vertical ? 'vertical' : ''} ${element.color}"></div>`)
    });
    return markup;
}    

blackmage.style.height = `${pixelUnit * 52}px`;
blackmage.style.width = `${pixelUnit * 36}px`;
blackmage.innerHTML = `${generatePattern(restPattern)}`
// blackmageWalk.innerHTML = `${generatePattern(walkPattern)}`
// blackmageCast.innerHTML = `${generatePattern(castPattern)}`

document.addEventListener('keydown', function(event){
    console.log(event.keyCode)
    if (event.keyCode === 65) {
        blackmage.innerHTML = `${generatePattern(castPattern)}`
    }
    if (event.keyCode === 90) {
        setInterval(
            blackmage.innerHTML = '',
            blackmage.innerHTML = `${generatePattern(walkPattern)}`, 
            2000
        )
        setInterval(
            blackmage.innerHTML = '',
            blackmage.innerHTML = `${generatePattern(restPattern)}`, 
            3000
        )
    }
})
document.addEventListener('keyup', function(event){
    setTimeout(
        blackmage.innerHTML = '',
        blackmage.innerHTML = `${generatePattern(restPattern)}`,
        clearInterval(),
        2000
    )
})