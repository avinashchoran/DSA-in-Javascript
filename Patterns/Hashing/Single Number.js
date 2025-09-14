// filepath: Patterns/Hashing/Single Number.js
// LeetCode: https://leetcode.com/problems/single-number/

/*
 * @problem: Single Number
 * @difficulty: Easy
 * @summary: Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.
 * @constraints:
 * - 1 <= nums.length <= 3 * 10^4
 * - -3 * 10^4 <= nums[i] <= 3 * 10^4
 * - Each element in the array appears twice except for one element which appears only once.
 * @examples:
 * - Input: nums = [2,2,1] -> Output: 1
 * - Input: nums = [4,1,2,1,2] -> Output: 4
 * - Input: nums = [1] -> Output: 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const hashSet = new Set();

    for (const num of nums) {
        if (hashSet.has(num)) {
            hashSet.delete(num);
        } else {
            hashSet.add(num);
        }
    }

    // The remaining element in the set is the single one.
    return hashSet.values().next().value;
};


// --- Example Usage ---

const nums1 = [2, 2, 1];
console.log(`Input: [${nums1}] -> Output:`, singleNumber(nums1)); // Expected: 1

const nums2 = [4, 1, 2, 1, 2];
console.log(`Input: [${nums2}] -> Output:`, singleNumber(nums2)); // Expected: 4

const nums3 = [1];
console.log(`Input: [${nums3}] -> Output:`, singleNumber(nums3)); // Expected: 1
