/**
 * Solution for the "Max Number of K-Sum Pairs" problem.
 *
 * This implementation uses the Two Pointers pattern, which provides an efficient
 * O(N log N) time complexity solution due to the initial sorting of the array.
 *
 * The core idea is to sort the array and use two pointers, one at the beginning
 * and one at the end, to find pairs that sum up to `k`.
 *
 * @param {number[]} nums The input array of numbers.
 * @param {number} k The target sum.
 * @returns {number} The maximum number of pairs that sum up to `k`.
 */
const maxOperations = function(nums, k) {
    // Sort the array to use the two-pointer approach.
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let count = 0;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === k) {
            // Found a pair.
            count++;
            left++;
            right--;
        } else if (sum < k) {
            // The sum is too small, so we need to increase it.
            left++;
        } else {
            // The sum is too large, so we need to decrease it.
            right--;
        }
    }

    return count;
};

// --------------------------------------------------------------------------------------
// My Initial Attempt (as a learning example)
// --------------------------------------------------------------------------------------
/*
// My Initial Attempt (as a learning example)
var maxOperations_initial = function(nums, k) {
    nums.sort((a, b) => a - b);
    let a = 0;
    let b = nums.length - 1;
    let count = 0;
    while (a < b) {
        const first = nums[a];
        const last = nums[b];
        if (first + last === k) {
            count++;
            a++;
            b--;
        } else if (first + last > k) {
            b--;
        } else {
            a++;
        }
    }
    return count;
};
*/

// --- Test Cases ---
function runTests() {
    const testCases = [
        { nums: [1, 2, 3, 4], k: 5, expected: 2, description: "Example 1" },
        { nums: [3, 1, 3, 4, 3], k: 6, expected: 1, description: "Example 2" },
        { nums: [2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], k: 3, expected: 4, description: "Complex case" },
        { nums: [1, 1, 1, 1], k: 2, expected: 2, description: "All same numbers" },
        { nums: [5, 5, 5, 5, 5], k: 10, expected: 2, description: "All same numbers with a remainder" },
    ];

    console.log("--- Testing maxOperations ---");
    testCases.forEach((test, index) => {
        const result = maxOperations([...test.nums], test.k);
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
