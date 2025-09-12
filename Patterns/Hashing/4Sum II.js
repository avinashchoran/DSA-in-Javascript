// filepath: Patterns/Hashing/4Sum II.js
// LeetCode: https://leetcode.com/problems/4sum-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

// Problem: 4Sum II
// Difficulty: Medium

// Problem Statement:
// Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:
// 0 <= i, j, k, l < n
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

// Constraints:
// n == nums1.length
// n == nums2.length
// n == nums3.length
// n == nums4.length
// 1 <= n <= 200
// -2^28 <= nums1[i], nums2[j], nums3[k], nums4[l] <= 2^28

var fourSumCount = function(nums1, nums2, nums3, nums4) {
    // Solution:
    
    // 1. Create a hash map to store the sums of pairs from the first two arrays and their frequencies.
    const map = new Map();
    
    // 2. Iterate through the first two arrays and calculate the sum of each pair.
    for (const num1 of nums1) {
        for (const num2 of nums2) {
            const sum = num1 + num2;
            // 3. Store the sum and its frequency in the hash map.
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }
    
    // 4. Initialize a counter for the number of tuples.
    let count = 0;
    
    // 5. Iterate through the last two arrays.
    for (const num3 of nums3) {
        for (const num4 of nums4) {
            const sum = num3 + num4;
            // 6. Check if the complement (-sum) exists in the hash map.
            if (map.has(-sum)) {
                // 7. If it exists, add its frequency to the counter.
                count += map.get(-sum);
            }
        }
    }
    
    // 8. Return the total count.
    return count;
};

// --- Example Usage ---

const nums1 = [1, 2];
const nums2 = [-2, -1];
const nums3 = [-1, 2];
const nums4 = [0, 2];

console.log("--- Input ---");
console.log("nums1:", nums1);
console.log("nums2:", nums2);
console.log("nums3:", nums3);
console.log("nums4:", nums4);


console.log("\n--- Output ---");
const result = fourSumCount(nums1, nums2, nums3, nums4);
console.log("Number of tuples:", result); // Expected output: 2

const nums5 = [0];
const nums6 = [0];
const nums7 = [0];
const nums8 = [0];

console.log("\n--- Input ---");
console.log("nums1:", nums5);
console.log("nums2:", nums6);
console.log("nums3:", nums7);
console.log("nums4:", nums8);

console.log("\n--- Output ---");
const result2 = fourSumCount(nums5, nums6, nums7, nums8);
console.log("Number of tuples:", result2); // Expected output: 1
