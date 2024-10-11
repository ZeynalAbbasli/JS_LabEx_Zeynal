// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let a = 0;
    let b = 1;
    for (let count = 1; count < n; count++) {
        [a,b] = [b, a+b];
    }
    return b;
}

module.exports = fib;
