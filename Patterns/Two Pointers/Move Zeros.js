/**
 * Question: Move Zeroes
 * Problem Description:
 * Given an integer array nums, move all 0s to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 */

/**
 * Solution 1: Fill and Zero Out (Two-Pass Two-Pointer)
 *
 * Explanation:
 * This approach uses two pointers. The 'slow' pointer (`nonZeroIndex`)
 * keeps track of the position to place the next non-zero element. The 'fast'
 * pointer (`i`) iterates through the entire array.
 *
 * In the first pass, we iterate through the array. When we find a non-zero element,
 * we place it at the position of the slow pointer and increment the slow pointer.
 * This effectively moves all non-zero elements to the beginning of the array.
 *
 * In the second pass, we fill the rest of the array (from the slow pointer's
 * position to the end) with zeros.
 *
 * This method is clear and avoids unnecessary swaps, which can be slightly
 * more efficient if the array has very few zeros.
 */
var moveZeroes_fillAndZeroOut = function(nums) {
    let nonZeroIndex = 0;

    // First pass: Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }

    // Second pass: Fill the remaining slots with zeros
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};

/**
 * Solution 2: Two Pointers with Swapping (Single-Pass)
 *
 * Explanation:
 * This solution also uses two pointers, `slow` and `fast`.
 * The 'slow' pointer (`slow`) keeps track of the position of the next zero to be
 * swapped with a non-zero element. The 'fast' pointer (`fast`) iterates
 * through the array to find non-zero elements.
 *
 * When the fast pointer finds a non-zero element, we swap it with the element at
 * the slow pointer's position. This moves the non-zero element into place and
 * pushes the zero towards the back. We then increment the slow pointer, which
 * will then point to the next potential zero to be swapped.
 *
 * This is a classic "in-place" single-pass solution that is often more concise.
 */
var moveZeroes_swap = function(nums) {
    let slow = 0;

    // The fast pointer is 'fast'. We can start it at 0 to compare with slow.
    for (let fast = 0; fast < nums.length; fast++) {
        // We only perform a swap if the fast pointer finds a non-zero element
        // and the slow pointer is at a zero.
        if (nums[fast] !== 0) {
            // Swap the elements at the slow and fast pointers.
            // This moves the non-zero element to the front and pushes a zero back.
            // Note: A swap is only necessary if the slow and fast pointers are not at the same position.
            // However, the swap operation still works correctly even if they are the same.
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            
            // Advance the slow pointer to the next position.
            slow++;
        }
    }
    // The problem statement says to modify in-place and not return.
};

// --- Test Cases ---
function runTests(solutionFunction, solutionName) {
    console.log(`\n--- Testing ${solutionName} ---`);
    const testCases = [
        { input: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0], description: "Example 1" },
        { input: [0], expected: [0], description: "Example 2: Single zero" },
        { input: [1, 2, 3], expected: [1, 2, 3], description: "No zeros" },
        { input: [0, 0, 0], expected: [0, 0, 0], description: "All zeros" },
        { input: [4, 2, 0, 1, 0, 3, 0], expected: [4, 2, 1, 3, 0, 0, 0], description: "Mixed zeros and non-zeros" }
    ];

    testCases.forEach((test, index) => {
        // Create a copy for modification to not affect the test case object
        const nums = [...test.input];
        solutionFunction(nums); // Modify in-place
        const isCorrect = JSON.stringify(nums) === JSON.stringify(test.expected);
        
        console.log(`Test Case ${index + 1}: ${test.description}`);
        console.log(`Input:    [${test.input.join(', ')}]`);
        console.log(`Output:   [${nums.join(', ')}]`);
        console.log(`Expected: [${test.expected.join(', ')}]`);
        console.log(`Result:   ${isCorrect ? '✅ Passed' : '❌ Failed'}`);
        console.log('-----------------------------------');
    });
}

// Run tests for both solutions
runTests(
    moveZeroes_fillAndZeroOut, 
    "Solution 1: Fill and Zero Out (Two-Pass)"
);
runTests(
    moveZeroes_swap, 
    "Solution 2: Two Pointers with Swapping (Single-Pass)"
);