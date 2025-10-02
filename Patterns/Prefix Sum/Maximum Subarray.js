// filepath: Patterns/Prefix Sum/Maximum Subarray.js
/**
 * Problem: Maximum Subarray
 * Difficulty: Medium
 * Description:
 * Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * Constraints:
 * - 1 <= nums.length <= 3 * 10^4
 * - -10^5 <= nums[i] <= 10^5
 *
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * Example 2:
 * Input: nums = [1]
 * Output: 1
 *
 * Example 3:
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 *
 */

// LeetCode: https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  /*
   * The problem asks for the largest sum of a contiguous subarray.
   * This can be solved efficiently using a variation of the prefix sum idea,
   * which is more commonly known as Kadane's Algorithm.
   *
   * The core idea is to iterate through the array while keeping track of two values:
   * 1. `currentSum`: The sum of the subarray ending at the current position.
   * 2. `maxSum`: The maximum sum found so far.
   *
   * The algorithm is as follows:
   * 1. Initialize `maxSum` and `currentSum` to the first element of the array.
   * 2. Iterate through the array starting from the second element.
   * 3. For each number, we have two choices:
   *    a) Start a new subarray at the current number.
   *    b) Extend the existing subarray by adding the current number.
   *
   *    We choose the one that gives a larger sum. So, `currentSum` becomes `max(current number, currentSum + current number)`.
   *
   * 4. After updating `currentSum`, we compare it with `maxSum` and update `maxSum` if `currentSum` is greater.
   *    `maxSum = max(maxSum, currentSum)`.
   *
   * 5. After iterating through the entire array, `maxSum` will hold the largest subarray sum.
   *
   * This approach works in O(n) time complexity and O(1) space complexity.
   */

  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Decide whether to extend the current subarray or start a new one
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update the overall maximum sum found so far
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

// --- Example Usage ---

const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("--- Input ---");
console.log("nums:", nums1);
console.log("
--- Output ---");
const result1 = maxSubArray(nums1);
console.log("Maximum Subarray Sum:", result1); // Expected output: 6

const nums2 = [1];
console.log("
--- Input ---");
console.log("nums:", nums2);
console.log("
--- Output ---");
const result2 = maxSubArray(nums2);
console.log("Maximum Subarray Sum:", result2); // Expected output: 1

const nums3 = [5, 4, -1, 7, 8];
console.log("
--- Input ---");
console.log("nums:", nums3);
console.log("
--- Output ---");
const result3 = maxSubArray(nums3);
console.log("Maximum Subarray Sum:", result3); // Expected output: 23
