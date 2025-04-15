var maxArea = function (height) {
  let res = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let capacity = Math.min(height[left], height[right]) * (right - left);
    res = Math.max(res, capacity);
    // maximum area - not need to test every pair — just move the shorter side inward
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return res;
};
