/*
class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        start = end = 0
        window_size = 0
        sums=sum(nums[0:k])
        max_average = sums/k
        for i in range(0, len(nums)-k):
            sums-= nums[i]
            sums += nums[i+k]
            average=sums/k
            max_average = max(max_average,average)
        return max_average
*/
/**
 * Solution for the "Maximum Average Subarray I" problem.
 *
 * This implementation uses the Sliding Window pattern, which provides an efficient
 * O(N) time complexity solution.
 *
 * The core idea is to maintain a "window" of size `k` as we iterate through the array.
 * We calculate the sum of the first window and then slide it, updating the sum in
 * O(1) time by adding the new element and subtracting the old one. The maximum
 * sum is tracked and finally divided by `k` to get the maximum average.
 *
 * @param {number[]} nums The input array of numbers.
 * @param {number} k The size of the contiguous subarray.
 * @returns {number} The maximum average of any contiguous subarray of size `k`.
 */
const findMaxAverage = function(nums, k) {
    let windowSum = 0;
    let maxSum = -Infinity;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd];

        if (windowEnd >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= nums[windowStart];
            windowStart++;
        }
    }

    return maxSum / k;
};

// --- Test Cases ---
function runTests() {
    const testCases = [
        { nums: [1, 12, -5, -6, 50, 3], k: 4, expected: 12.75, description: "Example 1" },
        { nums: [5], k: 1, expected: 5.0, description: "Example 2" },
        { nums: [0, 1, 1, 3, 3], k: 4, expected: 2.0, description: "Positive numbers" },
        { nums: [-1, -2, -3, -4, -5], k: 2, expected: -1.5, description: "Negative numbers" },
        { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k: 3, expected: 9.0, description: "Increasing numbers" },
    ];

    console.log("--- Testing findMaxAverage ---");
    testCases.forEach((test, index) => {
        const result = findMaxAverage(test.nums, test.k);
        const isCorrect = Math.abs(result - test.expected) < 1e-5; // Compare floating-point numbers

        console.log(`Test Case ${index + 1}: ${test.description}`);
        console.log(`Input:    nums=[${test.nums.join(', ')}], k=${test.k}`);
        console.log(`Output:   ${result}`);
        console.log(`Expected: ${test.expected}`);
        console.log(`Result:   ${isCorrect ? '✅ Passed' : '❌ Failed'}`);
        console.log('-----------------------------------');
    });
}

runTests();