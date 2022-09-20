/**
 * @param {string} s
 * @return {boolean}
 */
const some_string = 'A man, a plan, a canal: Panama';

const valid_palindrome_2 = function (some_string) {
  var lower_string = some_string.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let right = lower_string.length - 1;
  for (let left = 0; left < right; left++) {
    if (lower_string[left] !== lower_string[right]) {
      return false;
    }
    right--;
  }
  return true;
};

console.log(valid_palindrome_2(some_string));

// const string = "A man, a plan, a canal: Panama"

// const isValidPalindrome = function(s) {
//     s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

//     // initialize left/right pointers at start and end of string respectively
//     let left = 0; right = s.length - 1;

//     // loop through string characters while comparing them, then move the pointers closer to the center
//     while(left < right) {
//         if(s[left] !== s[right]) {
//             return false
//         }

//         left++;
//         right--;
//     }

//     return true;
// };

// console.log(isValidPalindrome(string));
