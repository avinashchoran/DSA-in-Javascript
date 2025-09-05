// filepath: Patterns/Hashing/Contains Duplicate.js
// Question: Given an array of integers, find if the array contains any duplicates.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Solution:
    
    // 1. Create a hash set to store the numbers we've seen so far.
    const numSet = new Set();
    
    // 2. Iterate through the input array 'nums'.
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        // 3. Check if the number already exists in the hash set.
        if (numSet.has(num)) {
            // If it exists, we have found a duplicate.
            return true;
        }
        
        // 4. If the number does not exist, add it to the hash set.
        numSet.add(num);
    }
    
    // 5. If no duplicates are found after iterating through the entire array, return false.
    return false;
};

// --- Example Usage ---

// LeetCode URL: https://leetcode.com/problems/contains-duplicate/

const nums1 = [1, 2, 3, 1];
console.log("--- Input ---");
console.log("nums:", nums1);
console.log("\n--- Output ---");
console.log("Contains duplicate:", containsDuplicate(nums1)); // Expected output: true

const nums2 = [1, 2, 3, 4];
console.log("\n--- Input ---");
console.log("nums:", nums2);
console.log("\n--- Output ---");
console.log("Contains duplicate:", containsDuplicate(nums2)); // Expected output: false

const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log("\n--- Input ---");
console.log("nums:", nums3);
console.log("\n--- Output ---");
console.log("Contains duplicate:", containsDuplicate(nums3)); // Expected output: true
