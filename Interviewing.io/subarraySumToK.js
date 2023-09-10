/* 
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2

APPROACHES:
Naive/Brute Force
Prefix Sum with Map or JS object 
Sliding window 


HINTS:
- use prefixSum approach 

EXPLANATIONS:
1. Brute Force Solution O(n^2):

This is the simplest approach that involves checking all possible subarrays.
It uses two nested loops to iterate through all subarrays and checks if each subarray's sum equals k.
Time Complexity: O(n^2) - Quadratic time complexity due to the nested loops.

2. Prefix Sum with Hash Map O(n):

This approach uses a hash map to store cumulative sums and their frequencies.
It iterates through the array once, calculating the cumulative sum at each index.
While iterating, it checks if the complement of the current cumulative sum (i.e., cumulativeSum - k) exists in the hash map. If it does, it increments the count.
Time Complexity: O(n) - Linear time complexity because it iterates through the array once.

*/

// pseudo code
// declare a fucntion(arr, k)
//     create a hash or obj
//     declare count and set to zero
//     declare sum and set to zero

//     set(0, 1)
//     iterate input arr
//         set sum equal to itself plus currentEl
//         if hash contains sum minus k
//             set count equal to hash value at sum minus k
//         if hash contains sum
//             increment hash value at sum
//         else
//             set sum to hash at one
//     return count

// NAIVE APPROACH
const subarraySum1 = (arr, k) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let end = i; end < arr.length; end++) {
      sum += arr[end];
      if (sum === k) {
        count++;
      }
    }
  }

  return count;
};

// PREFIX SUM WITH HASH / JS OBJECT
const subarraySum2 = (arr, k) => {
  const map = new Map();
  let count = 0;
  let sum = 0;

  map.set(0, 1);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1);
    } else {
      map.set(sum, 1);
    }
  }
  return count;
};

// SLIDING WINDOW APPROACH
const subarraySum3 = (nums, k) => {
  let start = 0;
  let sum = 0;
  let count = 0;

  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];

    while (sum >= k) {
      if (sum === k) {
        count++;
      }
      sum -= nums[start];
      start++;
    }
  }

  return count;
};

console.log(subarraySum3([1, 1, 1, 2], 4));
console.log(subarraySum3([1, 2, 0, 5, 3, 4, 1], 5));
console.log(subarraySum3([2, 4, 6, 8], 5));
console.log(subarraySum3([5], 5));
console.log(subarraySum3([], 5));

/* Test case 1: Example case
Output: 1 (Only one subarray [1, 1, 2] has a sum equal to 4)

Test case 2: Multiple valid subarrays
Output: 2 ([2, 3], [4, 1] have sums equal to 5)

Test case 3: No valid subarrays
Output: 0 (No subarray has a sum equal to 5)

Test case 4: Array with a single element
Output: 1 (The single element itself is a subarray with a sum equal to 5)

Test case 5: Empty array
Output: 0 (No subarray in an empty array) */
