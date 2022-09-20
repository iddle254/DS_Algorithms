/**
 * @param {string} s
 * @return {boolean}
 */
const some_string = 'A man, a plan, a canal: Panama';

const valid_palindrome = function (some_string) {
  var lower_string = some_string.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let flipped_string = [...lower_string].reverse().join('');
  if (lower_string !== flipped_string) {
    return false;
  }
  return true;
};

console.log(valid_palindrome(some_string));

// const string = "A man, a plan, a canal: Panama"

// const isValidPalindrome = function(s) {
//     s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//     let rev = "";

//     // generate a reverse string using a reverse for loop.
//     for(let i = s.length - 1; i >= 0; i--) {
//         rev += s[i];
//     }

//     return rev === s;
// };

// console.log(isValidPalindrome(string));
