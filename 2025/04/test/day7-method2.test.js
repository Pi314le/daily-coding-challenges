// method 2: use Set
var countPalindromicSubsequence = function (s) {
  let res = new Set(s);
  let resNum = 0;

  for (const char of res) {
    let left = s.indexOf(char);
    let right = s.lastIndexOf(char);

    let mid = new Set();
    for (let midInd = left + 1; midInd < right; midInd++) {
      mid.add(s[midInd]);
    }
    resNum += mid.size;
  }
  return resNum;
};
