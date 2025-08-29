/**
 * Problem: Find Pivot Index
 * Description:
 * Given an array of integers nums, calculate the pivot index of this array.
 * The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the right of the index.
 * If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
 * Return the leftmost pivot index. If no such index exists, return -1.
 *
 * Example 1:
 * Input: nums = [1, 7, 3, 6, 5, 6]
 * Output: 3
 * Explanation:
 * The sum of the numbers to the left of index 3 (nums[3] = 6) is 1 + 7 + 3 = 11.
 * The sum of the numbers to the right of index 3 is 5 + 6 = 11.
 *
 * Example 2:
 * Input: nums = [1, 2, 3]
 * Output: -1
 * Explanation:
 * There is no index that satisfies the conditions.
 *
 * Example 3:
 * Input: nums = [2, 1, -1]
 * Output: 0
 * Explanation:
 * The sum of the numbers to the left of index 0 is 0.
 * The sum of the numbers to the right of index 0 is 1 + -1 = 0.
 *
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -1000 <= nums[i] <= 1000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
    /*
     * Explanation:
     * The problem asks for an index where the sum of the numbers to the left equals the sum of the numbers to the right.
     * A naive approach would be to iterate through each index and, for each index, calculate the left and right sums separately.
     * This would result in an O(n^2) time complexity, which is inefficient for larger arrays.
     *
     * A more optimal approach is to use the concept of prefix sums.
     * The core idea is to first calculate the total sum of the entire array.
     * Then, we can iterate through the array once, keeping track of the sum of the numbers to the left (`leftSum`).
     *
     * For any given index `i`, the `rightSum` can be calculated without a second loop:
     * `rightSum = totalSum - leftSum - nums[i]`
     *
     * The algorithm is as follows:
     * 1. Calculate `totalSum` of all numbers in the array.
     * 2. Initialize `leftSum = 0`.
     * 3. Iterate through the `nums` array with index `i`.
     * 4. In each iteration, calculate `rightSum = totalSum - leftSum - nums[i]`.
     * 5. Check if `leftSum === rightSum`. If they are equal, `i` is the pivot index. Return `i`.
     * 6. If they are not equal, update `leftSum` by adding the current number: `leftSum += nums[i]`.
     * 7. If the loop completes without finding a pivot index, it means no such index exists. Return -1.
     *
     * This approach has a time complexity of O(n) because we iterate through the array twice at most (once to get the total sum, and once to find the pivot).
     * The space complexity is O(1) as we only use a few variables to store the sums.
     */

    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const rightSum = totalSum - leftSum - nums[i];

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
};

// --- Example Usage ---

const nums1 = [1, 7, 3, 6, 5, 6];
console.log("--- Input ---");
console.log("nums:", nums1);
console.log("
--- Output ---");
const result1 = pivotIndex(nums1);
console.log("Pivot Index:", result1); // Expected output: 3

const nums2 = [1, 2, 3];
console.log("
--- Input ---");
console.log("nums:", nums2);
console.log("
--- Output ---");
const result2 = pivotIndex(nums2);
console.log("Pivot Index:", result2); // Expected output: -1

const nums3 = [2, 1, -1];
console.log("
--- Input ---");
console.log("nums:", nums3);
console.log("
--- Output ---");
const result3 = pivotIndex(nums3);
console.log("Pivot Index:", result3); // Expected output: 0
