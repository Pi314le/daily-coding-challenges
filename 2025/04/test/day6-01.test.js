var findDisappearedNumbers = function (nums) {
  let indPointer = 0;
  let disArray = [];
  while (indPointer < nums.length) {
    if (
      indPointer + 1 === nums[indPointer] ||
      nums[indPointer] === nums[nums[indPointer] - 1]
    ) {
      indPointer++;
      continue;
    }

    let targetInd = nums[indPointer] - 1;
    const temp = nums[targetInd];
    nums[targetInd] = nums[indPointer];
    nums[indPointer] = temp;
  }

  for (let i = 0; i < nums.length; i++) {
    if (i + 1 !== nums[i]) disArray.push(i + 1);
  }
  return disArray;
};
