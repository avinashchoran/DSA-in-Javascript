/**
 * Finds two numbers in a sorted array that add up to the target.
 * This two-pointer approach has a time complexity of O(n) and space complexity of O(1).
 *
 * IMPORTANT: This specific two-pointer solution requires the input array to be sorted.
 * For the general "Two Sum" problem with an unsorted array, a hash map is the typical O(n) solution.
 *
 * @param {number[]} nums - A sorted array of integers.
 * @param {number} target - The target sum.
 * @returns {number[]} An array containing the 1-based indices of the two numbers, or an empty array if no solution is found.
 */
const twoSumSorted = (nums, target) => {
    let p1 = 0;
    let p2 = nums.length - 1;

    while (p1 < p2) {
        let currentSum = nums[p1] + nums[p2];

        if (currentSum === target) {
            // Found the solution.
            // Remember the problem often asks for 1-indexed results.
            return [p1 + 1, p2 + 1];
        } else if (currentSum < target) {
            // Sum is too small, need a larger number.
            // Move p1 to the right to increase the sum.
            p1++;
        } else { // currentSum > target
            // Sum is too large, need a smaller number.
            // Move p2 to the left to decrease the sum.
            p2--;
        }
    }
    // Per the problem description, a solution always exists, but it's good practice to handle the case where it might not.
    return [];
};

// Example Usage:
let nums = [2, 7, 11, 15];
let target = 9;
const result = twoSumSorted(nums, target);
console.log(result); // Output: [1, 2]