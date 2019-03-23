const red = '#ff0000'
const blue = '#080cf6'
const green = '#23f602'
const yellow = '#e5f212'
const magenta = '#e706de'

export const defaultBoard = [
    ['o', 'o', 'o'],
    ['o', 'o', 'o'],
    ['o', 'o', 'o']
]

export function randomColor(randomColor) {
    color[Math.floor(Math.random() * color.length)]
    return randomColor
}

export const color = [red, blue, green, yellow, magenta]


export const moves = (board1, board2) =>
    board1
        .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
        .reduce((a, b) => a.concat(b))
        .length

