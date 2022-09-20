const longestSubstring = function (some_string) {
  if (some_string.length <= 1) return some_string.length;
  let longest = 0;
  for (let left = 0; left < some_string.length; left++) {
    let current_length = 0,
      seen_chars = {};
    for (let right = left; right < some_string.length; right++) {
      let current_char = some_string[right];
      if (!seen_chars[current_char]) {
        current_length++;
        seen_chars[current_char] = true;
        longest = Math.max(longest, current_length);
      } else {
        break;
      }
    }
  }
  return longest;
};
