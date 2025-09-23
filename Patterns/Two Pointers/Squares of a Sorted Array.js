// filepath: Patterns/Two Pointers/Squares of a Sorted Array.js
/**
 * @name Squares of a Sorted Array
 * @difficulty Easy
 * @url https://leetcode.com/problems/squares-of-a-sorted-array/
 *
 * @problem Given an integer array `nums` sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 *
 * @constraints
 * - `1 <= nums.length <= 10^4`
 * - `-10^4 <= nums[i] <= 10^4`
 * - `nums` is sorted in non-decreasing order.
 *
 * @example
 * Input: nums = [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 * Explanation: After squaring, the array becomes [16,1,0,9,100]. After sorting, it becomes [0,1,9,16,100].
 *
 * @example
 * Input: nums = [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * @time_complexity O(n) - We iterate through the array once.
 * @space_complexity O(n) - We create a new array of the same size as the input.
 *
 * @description
 * We can use two pointers to read the input array from both ends.
 * Let's say the pointers are `left` and `right`. We can compare the absolute values of the numbers at these pointers.
 * The larger absolute value will result in a larger square.
 * We can then place the larger square at the end of the result array and move the corresponding pointer inward.
 * We repeat this process until the pointers meet.
 */
const sortedSquares = function(nums) {
    const n = nums.length;
    const result = new Array(n);
    let left = 0;
    let right = n - 1;

    for (let i = n - 1; i >= 0; i--) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            result[i] = leftSquare;
            left++;
        } else {
            result[i] = rightSquare;
            right--;
        }
    }

    return result;
};


// Example Usage:
const nums1 = [-4,-1,0,3,10];
console.log(sortedSquares(nums1)); // Output: [0,1,9,16,100]

const nums2 = [-7,-3,2,3,11];
console.log(sortedSquares(nums2)); // Output: [4,9,9,49,121]
