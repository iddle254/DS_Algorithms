const stringBuilder = function (string_to_build) {
  built_string = [];
  for (let i = 0; i < string_to_build.length; i++) {
    if (string_to_build[i] !== '#') {
      built_string.push(string_to_build[i]);
    } else {
      built_string.pop();
    }
  }
  console.log(built_string);
  return built_string;
};

var string_compare = function (Str_S, Str_T) {
  final_s = stringBuilder(Str_S);
  final_t = stringBuilder(Str_T);

  if (final_s.length !== final_t.length) {
    return false;
  } else {
    for (let p = 0; p < final_s.length; p++) {
      if (final_s[p] !== final_t[p]) {
        return false;
      }
    }
    return true;
  }
};

console.log(string_compare('staa#tue', 'statt#ue'));
