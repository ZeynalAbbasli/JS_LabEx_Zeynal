// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let sm = n + (n-1);
    let sym = "#";
    let spc = " "; 

    for (let i = 1; i<=n; i++) {
        let sp = i + (i-1);
        let lf_rg = (sm -sp) / 2;
        console.log(spc.repeat(lf_rg) + sym.repeat(sp) + spc.repeat(lf_rg));
    }
}

module.exports = pyramid;