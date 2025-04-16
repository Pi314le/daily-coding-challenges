var majorityElement = function (nums) {
  const timesMap = new Map();
  const n = nums.length;
  const halfLen = n / 2;

  for (let i = 0; i < n; i++) {
    if (timesMap.has(nums[i])) {
      timesMap.set(nums[i], timesMap.get(nums[i]) + 1);
    } else timesMap.set(nums[i], 1);

    // attention: don't put if statement for returning result into times++ function.
    // because when n=1, it will run `for loop` only 1 times. so it will not run if statement for times++ => of course have not chance to run return statement.
    if (timesMap.get(nums[i]) > halfLen) {
      return nums[i];
    }
  }
};

console.log(majorityElement([1]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
