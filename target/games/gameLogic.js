"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const red = '#ff0000';
const blue = '#080cf6';
const green = '#23f602';
const yellow = '#e5f212';
const magenta = '#e706de';
exports.defaultBoard = [
    ['o', 'o', 'o'],
    ['o', 'o', 'o'],
    ['o', 'o', 'o']
];
function randomColor(randomColor) {
    exports.color[Math.floor(Math.random() * exports.color.length)];
    return randomColor;
}
exports.randomColor = randomColor;
exports.color = [red, blue, green, yellow, magenta];
exports.moves = (board1, board2) => board1
    .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
    .reduce((a, b) => a.concat(b))
    .length;
//# sourceMappingURL=gameLogic.js.map