/**
 * Solution for the "Maximum Sum Subarray of Size K" problem.
 *
 * This implementation uses the Sliding Window pattern, which provides an efficient
 * O(N) time complexity solution compared to a brute-force O(N*K) approach.
 *
 * The core idea is to maintain a "window" of size `k` as we iterate through the array.
 * Instead of recalculating the sum of the window every time, we update it in
 * constant O(1) time by adding the new element and subtracting the old one.
 *
 * @param {number[]} arr The input array of positive numbers.
 * @param {number} k The size of the contiguous subarray.
 * @returns {number} The maximum sum of any contiguous subarray of size `k`.
 */
const maxSumOfSubarray = function(arr, k) {
    // Variable to hold the sum of the current window.
    let windowSum = 0;
    // Variable to hold the maximum sum found so far.
    let maxSum = 0;
    // Pointer to mark the start of the sliding window.
    let windowStart = 0;

    // The main loop for the sliding window pattern.
    // windowEnd is the pointer that expands the window to the right.
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        // Add the next element to the window sum.
        windowSum += arr[windowEnd];

        // Once the window has reached the size 'k', we can start "sliding" it.
        // This condition ensures we have at least 'k' elements in the window.
        if (windowEnd >= k - 1) {
            // Compare the current window sum with the maximum sum found so far.
            maxSum = Math.max(maxSum, windowSum);

            // Subtract the element at the beginning of the window, which is
            // about to be dropped as the window slides.
            windowSum -= arr[windowStart];

            // Slide the window forward by incrementing the windowStart pointer.
            windowStart++;
        }
    }

    return maxSum;
};

// --------------------------------------------------------------------------------------
// My Initial Attempt (as a learning example)
// --------------------------------------------------------------------------------------
/*
// This solution is functionally correct but can be refactored into a single loop
// for a more concise and common Sliding Window implementation. It uses two separate
// loops: one to establish the initial window sum, and a second to slide the window.
var MaxSum_initial = function(arr, k) {
    let maxSum = 0
    let f=0;
    let e = f + k - 1
    let sum=0;
    // First loop: calculate sum of the initial window
    for(let i = 0; i <= e; i++) {
        sum += arr[i]
    }
    maxSum = sum; // Initialize maxSum with the first window's sum
    
    e++
    // Second loop: slide the window
    while(e < arr.length) {
        sum = sum + arr[e] - arr[f]; // Add new element, remove old one
        maxSum = Math.max(maxSum, sum);
        f++;
        e++;
    }
    return maxSum
};
*/

// --- Test Cases ---
function runTests() {
    const testCases = [
        { arr: [2, 1, 5, 1, 3, 2], k: 3, expected: 9, description: "Example 1" },
        { arr: [2, 3, 4, 1, 5], k: 2, expected: 7, description: "Example 2" },
        { arr: [1, 2, 3, 4, 5, 6, 7], k: 4, expected: 22, description: "Increasing numbers" },
        { arr: [1, 1, 1, 1, 1], k: 5, expected: 5, description: "All same numbers" },
        { arr: [5, 4, 3, 2, 1], k: 2, expected: 9, description: "Decreasing numbers" },
    ];

    console.log("--- Testing maxSumOfSubarray ---");
    testCases.forEach((test, index) => {
        const result = maxSumOfSubarray(test.arr, test.k);
        const isCorrect = result === test.expected;

        console.log(`Test Case ${index + 1}: ${test.description}`);
        console.log(`Input:    arr=[${test.arr.join(', ')}], k=${test.k}`);
        console.log(`Output:   ${result}`);
        console.log(`Expected: ${test.expected}`);
        console.log(`Result:   ${isCorrect ? '✅ Passed' : '❌ Failed'}`);
        console.log('-----------------------------------');
    });
}

runTests();
