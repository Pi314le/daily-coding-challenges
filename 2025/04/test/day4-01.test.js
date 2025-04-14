var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const total = nums[i] + nums[j] + nums[left] + nums[right];
        if (total > target) {
          right--;
        } else if (total < target) {
          left++;
        } else {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          while (nums[left] === nums[left - 1] && left < right) {
            left++;
          }
          right--;
          while (nums[right] === nums[right + 1] && left < right) {
            right--;
          }
        }
      }
    }
  }
  return res;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
