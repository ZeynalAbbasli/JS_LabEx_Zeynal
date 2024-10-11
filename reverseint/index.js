// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let num_str = String(n);
    if(n < 0)
    {
        num_str = num_str.slice(1);
    }
    
    let arr = [...num_str];

    let num_str_fin = arr.reverse().join("");
    let num_fin = Number(num_str_fin);

    if(n < 0) {
        return num_fin*(-1);
    }
    return num_fin;

}

module.exports = reverseInt;
