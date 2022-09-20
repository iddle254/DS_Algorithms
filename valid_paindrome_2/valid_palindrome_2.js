/**
 * Given a string s, return true if the s can be palindrome after deleting at most one character from it.
 * @param {string} s
 * @return {boolean}
 */
const s = 'abc';
var validPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return (
        validSubPalindrome(s, start + 1, end) ||
        validSubPalindrome(s, start, end - 1)
      );
    }
    start++;
    end--;
  }
  return true;
};

var validSubPalindrome = function (s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

validPalindrome(s);
