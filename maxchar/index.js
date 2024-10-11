// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let arr = [...str];
    let arr_un = [...new Set(arr)];

    let count_max = 0;
    let idx_max = 0;

    for(let i = 0; i<arr_un.length; i++) {
        count = 0;
        for(let j = 0; j<arr.length; j++) {
            if(arr[j] === arr_un[i]) {
                count ++;
            }
        }
        if(count_max < count) {
            count_max = count;
            idx_max = i;
        }
    }

    return arr_un[idx_max];
}

module.exports = maxChar;
