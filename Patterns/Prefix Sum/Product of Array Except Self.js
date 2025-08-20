/*
Given an integer array nums, return an array answer such that answer[i] is
equal to the product of all the elements of nums except nums[i].

The algorithm runs in O(n) time and without using the division operation.
The output array does not count as extra space for the purpose of space complexity analysis.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:
2 <= nums.length <= 10^5
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);

    // First pass: Calculate prefix products and store in answer
    let prefixProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefixProduct;
        prefixProduct *= nums[i];
    }

    // Second pass: Calculate postfix products and multiply with the prefix products
    let postfixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= postfixProduct;
        postfixProduct *= nums[i];
    }

    return answer;
};

// Example usage:
// const nums1 = [1, 2, 3, 4];
// console.log(`Input: ${nums1}`);
// console.log(`Output: ${productExceptSelf(nums1)}`); // Expected: [24, 12, 8, 6]

// const nums2 = [-1, 1, 0, -3, 3];
// console.log(`Input: ${nums2}`);
// console.log(`Output: ${productExceptSelf(nums2)}`); // Expected: [0, 0, 9, 0, 0]
