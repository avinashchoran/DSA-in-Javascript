// Question: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Solution:
    
    // 1. Create a hash map to store the numbers we've seen so far and their indices.
    const numMap = new Map();
    
    // 2. Iterate through the input array 'nums'.
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        
        // 3. Check if the complement exists in the hash map.
        if (numMap.has(complement)) {
            // If it exists, we have found our pair.
            return [numMap.get(complement), i];
        }
        
        // 4. If the complement does not exist, add the current number and its index to the hash map.
        numMap.set(num, i);
    }
    
    // 5. If no solution is found, return an empty array.
    return [];
};

// --- Example Usage ---

const nums = [2, 7, 11, 15];
const target = 9;

console.log("--- Input ---");
console.log("nums:", nums);
console.log("target:", target);

console.log("\n--- Output ---");
const result = twoSum(nums, target);
console.log("Indices of the two numbers:", result); // Expected output: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;

console.log("\n--- Input ---");
console.log("nums:", nums2);
console.log("target:", target2);

console.log("\n--- Output ---");
const result2 = twoSum(nums2, target2);
console.log("Indices of the two numbers:", result2); // Expected output: [1, 2]
