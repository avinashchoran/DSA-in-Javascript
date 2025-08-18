/**
 * Problem: Subarray Sum Equals K
 * Description:
 * Given an integer array nums and an integer k, return the total number of continuous subarrays whose sum equals k.
 * A continuous subarray is a sequence of contiguous elements in the array.
 *
 * Example 1:
 * Input: nums = [1, 1, 1], k = 2
 * Output: 2
 * Explanation: The two subarrays are [1, 1] and [1, 1].
 *
 * Example 2:
 * Input: nums = [1, 2, 3], k = 3
 * Output: 2
 * Explanation: The two subarrays are [1, 2] and [3].
 *
 * Constraints:
 * 1 <= nums.length <= 2 * 10^4
 * -1000 <= nums[i] <= 1000
 * -10^7 <= k <= 10^7
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
    /*
     * Explanation:
     * A naive approach would be O(n^2), checking every possible subarray. A more efficient
     * approach is to use a hash map (or Map in JavaScript) to store prefix sums.
     *
     * The key idea is that the sum of a subarray from index i to j can be expressed as:
     * sum(i, j) = prefixSum[j] - prefixSum[i-1].
     *
     * We are looking for subarrays where sum(i, j) = k.
     *
     * Rearranging the formula, we get:
     * prefixSum[i-1] = prefixSum[j] - k.
     *
     * This means that as we iterate through the array and calculate the current prefix sum (prefixSum[j]),
     * we can check if a previous prefix sum (prefixSum[i-1]) exists that equals (prefixSum[j] - k).
     * If such a prefix sum exists, it implies that the subarray between the end of that prefix sum
     * and the current index has a sum of k.
     *
     * We use a Map to store the frequency of each prefix sum encountered so far.
     * The Map will have `key = prefix_sum` and `value = frequency`.
     * We initialize the map with `{0: 1}` to handle the case where a subarray
     * starting from the beginning of the array has a sum equal to k.
     *
     * The algorithm is as follows:
     * 1. Initialize `count = 0` and `currentSum = 0`.
     * 2. Initialize `sumCounts = new Map()` and set `sumCounts.set(0, 1)`.
     * 3. Iterate through the `nums` array.
     * 4. In each iteration, add the current number to `currentSum`.
     * 5. Check if the map has the key `currentSum - k`. If it does, add its value to `count`.
     * 6. Update the frequency of `currentSum` in the map.
     * 7. Return `count`.
     *
     * This approach allows us to find the total number of subarrays with a sum of k in
     * O(n) time complexity, as we only need to iterate through the array once.
     */
    
    // A map to store the frequency of each prefix sum
    const sumCounts = new Map();
    // Initialize the map with a sum of 0 having a count of 1.
    // This handles the case where a subarray starts from index 0
    // and its sum is equal to k.
    sumCounts.set(0, 1);
    
    let count = 0;
    let currentSum = 0;
    
    // Iterate through the array
    for (const num of nums) {
        currentSum += num;
        
        // If the map contains a key that is `currentSum - k`,
        // it means we have found a subarray with a sum of k.
        // The value associated with that key is the number of
        // such subarrays, so we add it to our total count.
        if (sumCounts.has(currentSum - k)) {
            count += sumCounts.get(currentSum - k);
        }
        
        // Update the frequency of the current sum in the map.
        // If the currentSum is already a key, increment its value.
        // Otherwise, add it with a value of 1.
        sumCounts.set(currentSum, (sumCounts.get(currentSum) || 0) + 1);
    }
    
    return count;
};