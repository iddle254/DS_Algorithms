/**
 * @param {number[]} elevationMap
 * @return {number}
 */

const me_trap_rainwater = function (elevationMap) {
  let total_water = 0,
    max_r = 0,
    max_l = 0;

  for (let p = 0; p < elevationMap.length; p++) {
    let left_p = p,
      right_p = p;
    while (left_p >= 0) {
      max_l = Math.max(max_l, elevationMap[left_p]);
      left_p--;
    }
    while (right_p < elevationMap.length) {
      max_r = Math.max(max_r, elevationMap[right_p]);
      right_p++;
    }
    let current_water = Math.min(max_l, max_r) - elevationMap[p];
    if (current_water > 0) {
      total_water = total_water + current_water;
    }
  }
  return total_water;
};

var elevationMap = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
console.log(me_trap_rainwater(elevationMap));
