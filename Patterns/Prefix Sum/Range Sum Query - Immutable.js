/**
 * Problem: Range Sum Query - Immutable
 * Description:
 * Given an integer array nums, handle multiple queries of the following type:
 * 1. Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
 *
 * Implement the NumArray class:
 * - NumArray(int[] nums) Initializes the object with the integer array nums.
 * - int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 *
 * Example 1:
 * Input:
 * ["NumArray", "sumRange", "sumRange", "sumRange"]
 * [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
 * Output:
 * [null, 1, -1, -3]
 *
 * Explanation:
 * NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
 * numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
 * numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
 * numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
 *
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -10^5 <= nums[i] <= 10^5
 * 0 <= left <= right < nums.length
 * At most 10^4 calls will be made to sumRange.
 */

/**
 * @param {number[]} nums
 */
const NumArray = function(nums) {
    /*
     * Explanation:
     * The core idea is to pre-compute the prefix sums of the array.
     * The prefix sum at index `i` is the sum of all elements from index 0 to `i`.
     *
     * Let's say we have `prefixSum` array where `prefixSum[i]` stores the sum of elements
     * from `nums[0]` to `nums[i-1]`. We make the `prefixSum` array of size `n+1` to
     * easily handle the case where the range starts from index 0.
     *
     * `prefixSum[0] = 0`
     * `prefixSum[i] = nums[0] + ... + nums[i-1]` for `i > 0`.
     *
     * To calculate the sum of a range `[left, right]`, we can use the prefix sums:
     * `sumRange(left, right) = prefixSum[right + 1] - prefixSum[left]`
     *
     * For example, if `nums = [-2, 0, 3, -5, 2, -1]`:
     * The `prefixSum` array would be `[0, -2, -2, 1, -4, -2, -3]`.
     *
     * To get `sumRange(0, 2)`:
     * `prefixSum[2 + 1] - prefixSum[0] = prefixSum[3] - prefixSum[0] = 1 - 0 = 1`
     *
     * To get `sumRange(2, 5)`:
     * `prefixSum[5 + 1] - prefixSum[2] = prefixSum[6] - prefixSum[2] = -3 - (-2) = -1`
     *
     * This approach allows us to answer each `sumRange` query in O(1) time after an
     * initial O(n) preprocessing step to build the `prefixSum` array.
     */
    
    this.prefixSum = new Array(nums.length + 1).fill(0);
    
    for (let i = 0; i < nums.length; i++) {
        this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.prefixSum[right + 1] - this.prefixSum[left];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
