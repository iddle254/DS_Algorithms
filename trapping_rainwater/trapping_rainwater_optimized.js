/**
 * @param {number[]} heights
 * @return {number}
 */
const elevationMap = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

const trapping_rainwater_optimized = function (heights) {
  let left = 0,
    right = heights.length - 1,
    total_water = 0,
    max_l = 0,
    max_r = 0;

  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (max_l <= heights[left]) {
        max_l = heights[left];
      } else {
        total_water += max_l - heights[left];
      }
      left++;
    } else {
      if (max_r < heights[right]) {
        max_r = heights[right];
      } else {
        total_water += max_r - heights[right];
      }
      right--;
    }
  }

  return total_water;
};

console.log(trapping_rainwater_optimized(elevationMap));
