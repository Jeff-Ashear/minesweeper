// We are going to simulate part of a Minesweeper game.
// In Minesweeper, hidden mines are placed on a board and the player makes "guesses" by uncovering spaces. The player loses if they uncover a mine. A guess is represented by a set of (x, y) coordinates corresponding to indices on the board. If a guess does not contain a mine, the location is uncovered and the number of adjacent mines is revealed. A Minesweeper game starts out with a board completely filled with mines and unknown spaces. For this exercise, a board can be represented as a two-dimensional uniform array with its elements being one of the following:
//
// - '*' representing the location of a mine
// - '?' representing the location where a mine is not present but has not been uncovered
// - as guesses are made, a number 1-8 (such as '2') representing the number of mines in the adjacent squares (diagonals included) around a particular location
//
// In this exercise, we will only simulate a single Minesweeper guess.
//
// Write a function that takes as input a Minesweeper board as well as an x and y coordinate of a guess and does the following:
//
// 1. If the spot on the board is a mine, print the string “BOOM!”
// 2. If the spot is not a mine and has 1 or more adjacent mines, uncover the spot by changing the value in the board to a number that represents how many mines are adjacent to the guess and print the updated board. Diagonal spaces are adjacent.
// 3. If the spot is not a mine and has 0 adjacent mines, uncover the spot by changing the value to 0 and subsequently uncover all adjacent squares, repeating this process if adjacent squares also have 0 adjacent mines.
//
// Example:
//
let board = [
    ['?', '?', '*', '?', '?'],
    ['?', '?', '?', '?', '?'],
    ['?', '*', '*', '?', '?'],
    ['?', '?', '?', '*', '?']
]

const minesweeper_guess = (board, y, x) => {
    //convert x and y values to the correct position in the arrays
    //y will select the correct array
    //x will select the possition in the "y" array
    let line = board[y]
    let guess = line[x]
    let mines = 0

    if (guess === "*") {
        return "BOOM!"
    } else if (guess != "*") {
        //check line -1
        let row
        for (let i = -1; i <= 1; ++i) {
            // if (y != 0) {
                row = board[y + i]

                for (let i = -1; i <= 1; ++i) {
                    if (row[x + i] === "*") {
                        mines = mines + 1
                    }
                }
            // }
        }
        board[y][x] = mines.toString();
        return board
    }
}
//
// minesweeper_guess(board, 0, 2) prints “BOOM!”
console.log(minesweeper_guess(board, 0, 2))
//
// minesweeper_guess(board, 0, 3) prints the following board:
// [  ['?', '?', '*', '1', '?'],
//    ['?', '?', '?', '?', '?'],
//    ['?', '*', '*', '?', '?'],
//    ['?', '?', '?', '*', '?']
// ]
console.log(minesweeper_guess(board, 0, 3))
//
// minesweeper_guess(board, 1, 4) prints the following board:
// [  ['?', '?', '*', '1', '0'],
//    ['?', '?', '?', '2', '0'],
//    ['?', '*', '*', '2', '1'],
//    ['?', '?', '?', '*', '?']
// ]
// const add = (a, b) => {
//     return a + b
// }

// f(x) = 2x + 5
// f(a,b) = a + b

