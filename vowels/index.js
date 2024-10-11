// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vovels_str = "aeiou";
    let vowels_arr = [...(vovels_str + vovels_str.toUpperCase())];
    let count = 0;
    n = str.length;

    for(let i = 0; i<n; i++) {
        if(vowels_arr.includes(str[i])) {
            count ++;
        }
    }
    return count;
}

module.exports = vowels;
