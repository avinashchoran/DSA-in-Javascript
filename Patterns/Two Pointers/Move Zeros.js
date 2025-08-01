/**
 * Question: Move Zeroes
 * Problem Description:
 * Given an integer array nums, move all 0s to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 *
 * Explanation:
 * The solution uses a **two-pointer approach** to solve this problem in-place.
 *
 * - A 'slow' pointer (`nonZeroIndex`) tracks the position where the next
 * non-zero element should be placed. It effectively marks the boundary
 * between the non-zero elements we've processed and the zeros.
 *
 * - A 'fast' pointer (`i`) iterates through the entire array.
 *
 * As the fast pointer finds a non-zero element, it's moved to the position
 * of the slow pointer. The slow pointer then increments. This partitions
 * the array, putting all non-zero elements at the beginning. After the
 * fast pointer has finished, all remaining elements from the slow pointer's
 * position to the end of the array are guaranteed to be zeros, so we simply
 * fill them with 0s.
 */
var moveZeroes = function(nums) {
    // 'nonZeroIndex' is our slow pointer. It keeps track of the position
    // to place the next non-zero element.
    let nonZeroIndex = 0;
    
    // 'i' is our fast pointer, iterating through the entire array.
    for (let i = 0; i < nums.length; i++) {
        // If the element at the fast pointer is not 0...
        if (nums[i] !== 0) {
            // ...we place it at the slow pointer's position.
            nums[nonZeroIndex] = nums[i];
            // Then, we advance the slow pointer to the next position.
            nonZeroIndex++;
        }
    }
    
    // After the first loop, all non-zero elements have been moved to the
    // beginning of the array. The remaining elements from 'nonZeroIndex'
    // to the end must be zeros.
    
    // We now fill the rest of the array with zeros.
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};

// --- Test Cases ---
function runTests() {
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
        moveZeroes(nums);
        const isCorrect = JSON.stringify(nums) === JSON.stringify(test.expected);
        
        console.log(`--- Test Case ${index + 1}: ${test.description} ---`);
        console.log(`Input:    [${test.input.join(', ')}]`);
        console.log(`Output:   [${nums.join(', ')}]`);
        console.log(`Expected: [${test.expected.join(', ')}]`);
        console.log(`Result:   ${isCorrect ? '✅ Passed' : '❌ Failed'}`);
        console.log('-----------------------------------');
    });
}

runTests();
