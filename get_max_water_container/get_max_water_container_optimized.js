/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let p1 = 0,
    p2 = height.length - 1,
    maxArea = 0;

  while (p1 < p2) {
    const heights = Math.min(height[p1], height[p2]);
    const width = p2 - p1;
    const area = heights * width;
    maxArea = Math.max(maxArea, area);

    if (height[p1] <= height[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  console.log(maxArea);
  return maxArea;
};
height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
maxArea(height);
