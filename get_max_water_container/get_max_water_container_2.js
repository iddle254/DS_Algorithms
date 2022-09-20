/**
 * @param {number[]} height
 * @return {number}
 */

var get_max_water_2 = function (heights) {
  let max_area = 0;
  for (let p = 0; p < heights.length; p++) {
    for (let q = p + 1; q < heights.length; q++) {
      var height = Math.min(heights[p], heights[q]);
      var width = q - p;
      const area = height * width;
      max_area = Math.max(area, max_area);
      console.log(max_area);
    }
  }

  return max_area;
};

const get_area = get_max_water_2([3, 5, 8, 1, 3, 4, 7]);
