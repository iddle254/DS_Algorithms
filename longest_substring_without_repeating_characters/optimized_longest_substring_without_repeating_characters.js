const some_string = 'abcacdefacc';

const optim_longest_substring = function (some_string) {
  if (some_string.length <= 1) return some_string.length;
  let left = 0,
    longest = 0,
    seen_chars = new Map();
  for (let right = 0; right < some_string.length; right++) {
    var current_char = some_string[right];
    var first_seen = seen_chars.get(current_char);

    if (first_seen >= left) {
      left = first_seen + 1;
    }
    seen_chars.set(current_char, right);
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};

console.log(optim_longest_substring(some_string));
