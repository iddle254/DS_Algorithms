/**
 * @param {number[]} height
 * @return {number}
 */

const elevationArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

var trap = function (height) {
  let max_water = 0;
  for (let p = 0; p < height.length; p++) {
    let left_p = p,
      right_p = p,
      max_l = 0,
      max_r = 0;
    while (left_p >= 0) {
      max_l = Math.max(max_l, height[left_p]);
      left_p--;
    }
    while (right_p < height.length) {
      max_r = Math.max(max_r, height[right_p]);
      right_p++;
    }
    var current_water = Math.min(max_l, max_r) - height[p];

    if (current_water >= 0) {
      max_water += current_water;
    }
  }
  return max_water;
};

console.log(trap(elevationArray));
