// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {


    const result = Array.from({ length: n }, () => Array(n).fill(0));

    let counter = 1;
    let startRow = 0, endRow = n - 1;
    let startCol = 0, endCol = n - 1;


    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter++;
        }
        startRow++;

        
        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter++;
        }
        endCol--;

        
        if (startRow <= endRow) {
            for (let i = endCol; i >= startCol; i--) {
                result[endRow][i] = counter++;
            }
            endRow--;
        }

        
        if (startCol <= endCol) {
            for (let i = endRow; i >= startRow; i--) {
                result[i][startCol] = counter++;
            }
            startCol++;
        }
    }

    return result;
}

module.exports = matrix;
