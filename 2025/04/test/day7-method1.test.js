// method 1
var countPalindromicSubsequence = function (s) {
  // ch ch ch
  // ch x  ch
  // => ch _ ch => _ could be any of the 26 letters, ch - 2 same chars - 26 letters
  // Try to find the same characters at the both sides. Then we make each character unique between the same characters.

  let resNum = 0;
  let firstIndMap = Array(26).fill(-1);
  let lastIndMap = Array(26).fill(-1);
  // get first and last index of each letter: T(n) = O(n) => total: 2 loops, no nested loop => T(n) = O(2n)
  for (let ind = 0; ind < s.length; ind++) {
    let letterInd = s[ind].charCodeAt(0) - "a".charCodeAt(0);

    if (firstIndMap[letterInd] === -1) firstIndMap[letterInd] = ind;
    lastIndMap[letterInd] = ind;
  }

  // use alphabet index iteration and firstIndMap !== -1 to check character existence, no need for a Set.
  for (let i = 0; i < 26; i++) {
    let left = firstIndMap[i];
    let right = lastIndMap[i];
    if (firstIndMap[i] !== -1) {
      let mid = new Set();
      for (let midInd = left + 1; midInd < right; midInd++) {
        mid.add(s[midInd]);
      }
      resNum += mid.size;
    }
  }
  return resNum;
};
