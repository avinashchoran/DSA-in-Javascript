// filepath: Patterns/Two Pointers/3Sum.js
/**
 * LeetCode Problem: 3Sum
 * Difficulty: Medium
 *
 * Problem Statement:
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 * Constraints:
 * - 3 <= nums.length <= 3000
 * - -10^5 <= nums[i] <= 10^5
 *
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 *
 * Example 2:
 * Input: nums = [0,1,1]
 * Output: []
 *
 * Example 3:
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 *
 * Solution Approach:
 * To solve this problem efficiently and handle duplicates, we can use a combination of sorting and the two-pointer technique.
 * First, sort the input array `nums`. This allows us to easily skip duplicate values and use the two-pointer approach on the remainder of the array.
 *
 * Iterate through the array with a for loop. For each element `nums[i]`, we will try to find two other numbers in the array that sum up to `-nums[i]`.
 * To do this, we use two pointers, `left` starting at `i + 1` and `right` starting at the end of the array.
 *
 * Move the pointers inward based on their sum:
 * - If `sum === target`, we found a triplet. Add it to our result list. To avoid duplicates, we then move both `left` and `right` pointers past any subsequent identical values.
 * - If `sum < target`, we need a larger sum, so we increment `left`.
 * - If `sum > target`, we need a smaller sum, so we decrement `right`.
 *
 * We must also handle duplicates for the first element of the triplet. If the current element `nums[i]` is the same as the previous one, we skip it to avoid generating duplicate triplets.
 * This approach has a time complexity of O(n^2) due to the nested loops (the outer for loop and the inner while loop). The sorting takes O(n log n), which is dominated by O(n^2).
 *
 * LeetCode Link: https://leetcode.com/problems/3sum/
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    const result = [];
    // 1. Sort the array
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // 2. Skip duplicate starting elements
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        const target = -nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        // 3. Use two pointers to find the other two numbers
        while (left < right) {
            const sum = nums[left] + nums[right];

            if (sum === target) {
                result.push([nums[i], nums[left], nums[right]]);

                // 4. Skip duplicate elements for the other two numbers
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                // Move pointers
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};


// --- Test Cases ---
function runTests() {
    const testCases = [
        { input: [-1, 0, 1, 2, -1, -4], expected: [[-1, -1, 2], [-1, 0, 1]], description: "Example 1" },
        { input: [0, 1, 1], expected: [], description: "Example 2" },
        { input: [0, 0, 0], expected: [[0, 0, 0]], description: "Example 3" },
        { input: [], expected: [], description: "Empty array" },
        { input: [1, 2, -2, -1], expected: [], description: "No triplets sum to zero" },
        { input: [-2, 0, 1, 1, 2], expected: [[-2, 0, 2], [-2, 1, 1]], description: "Duplicates in the middle" }
    ];

    console.log("--- Testing threeSum ---");
    testCases.forEach((test, index) => {
        const result = threeSum(test.input);
        // Sort both arrays to ensure comparison is correct regardless of order
        const sortedResult = result.map(t => t.sort((a, b) => a - b));
        const sortedExpected = test.expected.map(t => t.sort((a, b) => a - b));

        // A more robust way to compare arrays of arrays
        const isCorrect = JSON.stringify(sortedResult) === JSON.stringify(sortedExpected);

        console.log(`Test Case ${index + 1}: ${test.description}`);
        console.log(`Input:    [${test.input.join(', ')}]`);
        console.log(`Output:   ${JSON.stringify(result)}`);
        console.log(`Expected: ${JSON.stringify(test.expected)}`);
        console.log(`Result:   ${isCorrect ? '✅ Passed' : '❌ Failed'}`);
        console.log('-----------------------------------');
    });
}

runTests();
