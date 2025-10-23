/**
 * Solution for the "Max Consecutive Ones III" problem (LeetCode 1004).
 *
 * This implementation uses the Sliding Window pattern to find the longest
 * sequence of consecutive 1s, allowing for up to `k` zeros to be flipped.
 * The time complexity is O(N) because each element is visited at most twice
 * (by the left and right pointers), and the space complexity is O(1).
 *
 * The core idea is to expand a window from the right and count the number of
 * zeros within it. If the zero count exceeds `k`, the window is invalid, so
 * we shrink it from the left until it becomes valid again.
 *
 * @param {number[]} nums The input binary array.
 * @param {number} k The maximum number of zeros allowed to be flipped.
 * @returns {number} The length of the longest contiguous subarray of 1s.
 */
const longestOnes = function(nums, k) {
    // Pointer to mark the start of the sliding window.
    let windowStart = 0;
    // Variable to store the maximum length found so far.
    let maxLength = 0;
    // Counter for the number of zeros in the current window.
    let zeroCount = 0;

    // The main loop for the sliding window pattern.
    // windowEnd is the pointer that expands the window to the right.
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        // If the current element is a 0, increment the zero counter.
        if (nums[windowEnd] === 0) {
            zeroCount++;
        }

        // If the number of zeros in the window exceeds k, we need to shrink
        // the window from the left until it's valid again.
        while (zeroCount > k) {
            // If the element at the start of the window is a 0, decrement
            // the zero counter as it's being removed from the window.
            if (nums[windowStart] === 0) {
                zeroCount--;
            }
            // Slide the window forward by incrementing the windowStart pointer.
            windowStart++;
        }

        // After ensuring the window is valid, calculate its current length
        // and update maxLength if this window is the longest so far.
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
};

// --- Test Cases ---
function runTests() {
    const testCases = [
        { nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k: 2, expected: 6, description: "Example 1" },
        { nums: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k: 3, expected: 10, description: "Example 2" },
        { nums: [1, 1, 1, 1, 1], k: 2, expected: 5, description: "All ones" },
        { nums: [0, 0, 0, 0], k: 2, expected: 2, description: "All zeros, k=2" },
        { nums: [0, 0, 0, 1], k: 4, expected: 4, description: "k is larger than array length" },
        { nums: [1, 0, 1, 0, 1], k: 0, expected: 1, description: "k=0, single 1s" },
        { nums: [0, 0, 0, 0], k: 0, expected: 0, description: "k=0, all zeros" }
    ];

    console.log("--- Testing longestOnes ---");
    testCases.forEach((test, index) => {
        const result = longestOnes(test.nums, test.k);
        const isCorrect = result === test.expected;

        console.log(`Test Case ${index + 1}: ${test.description}`);
        console.log(`Input:    nums=[${test.nums.join(', ')}], k=${test.k}`);
        console.log(`Output:   ${result}`);
        console.log(`Expected: ${test.expected}`);
        console.log(`Result:   ${isCorrect ? '✅ Passed' : '❌ Failed'}`);
        console.log('-----------------------------------');
    });
}

runTests();
