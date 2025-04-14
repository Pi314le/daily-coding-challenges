var countGoodTriplets = function (arr, a, b, c) {
  let res = 0;
  // Prefix frequency array: store the number of times of every sum element,which is >= arr[history j] before current j index, and used for range queries [left, right]
  // fill(0): when j = 0, there are no i available. So, when at the first time res += , it is still 0, as there are no i values available to form a triplet.
  // S(n) = O(1001) = O(1)
  let sum = Array(1001).fill(0);

  // T(n) = O(n^2)
  // Loop over j (middle of triplet)
  for (let j = 0; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      if (Math.abs(arr[j] - arr[k]) <= b) {
        // Define intersection range [l, r] for valid arr[i]
        let lj = arr[j] - a;
        let rj = arr[j] + a;
        let lk = arr[k] - c;
        let rk = arr[k] + c;

        let left = Math.max(0, Math.max(lj, lk));
        let right = Math.min(1000, Math.min(rj, rk));
        if (left <= right) {
          // Use prefix sum to count how many i < j satisfy arr[i] ∈ [l, r]
          if (left === 0) res += sum[right];
          else res += sum[right] - sum[left - 1];
        }
      }
    }

    // Update prefix sum: add arr[j] for future queries
    // T(n) = O(1000n)
    for (let ind = arr[j]; ind <= 1000; ind++) {
      sum[ind]++; // Brute-force update (acceptable because range is small)
    }
  }

  return res;
};
