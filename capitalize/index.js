// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    words = str.split(' ');
    for(let i = 0; i<words.length; i++) {
        let word = words[i];
        let word_arr = word.split('');
        word_arr[0] = word_arr[0].toUpperCase();
        word = word_arr.join('');
        words[i] = word;
    }
    return words.join(' ');
    
}

module.exports = capitalize;
