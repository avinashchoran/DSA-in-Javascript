/**
 * Question: Container With Most Water
 * Problem Description:
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that, together with the x-axis, form a container that holds the most water.
 * Return the maximum amount of water a container can store.
 * Note that you may not slant the container.
 *
 * @param {number[]} height
 * @return {number} The maximum amount of water the container can store.
 *
 * Example 1:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 *
 * Example 2:
 * Input: height = [1,1]
 * Output: 1
 *
 * Explanation:
 * The optimal solution uses a two-pointer approach to solve this problem in O(n) time.
 * We start with two pointers, `left` at the beginning and `right` at the end of the array.
 * The area is calculated by `width * height`, where the width is the distance between the
 * pointers (`right - left`) and the height is limited by the shorter of the two lines
 * (`Math.min(height[left], height[right])`).
 *
 * In each step, we calculate the current area and compare it with the maximum area found so far.
 * To potentially find a larger area, we must move the pointer corresponding to the shorter line.
 * This is because moving the taller line will not increase the container's height (which is
 * limited by the shorter line) but will decrease the width, thus guaranteeing a smaller area.
 * By moving the shorter line, we have a chance to find a taller line that could lead to
 * a larger container.
 */
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        // Calculate the current area.
        const currentHeight = Math.min(height[left], height[right]);
        const currentWidth = right - left;
        const currentArea = currentHeight * currentWidth;
        
        // Update the maximum area if the current area is greater.
        maxArea = Math.max(maxArea, currentArea);

        // Move the pointer that is pointing to the shorter line.
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};

// --- Test Cases ---
function runTests() {
    const testCases = [
        { input: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49, description: "Example 1 from problem" },
        { input: [1, 1], expected: 1, description: "Example 2 from problem" },
        { input: [4, 3, 2, 1, 4], expected: 16, description: "U-shaped container" },
        { input: [1, 2, 1], expected: 2, description: "Small container" },
    ];

    console.log("--- Testing maxArea ---");
    testCases.forEach((test, index) => {
        const result = maxArea(test.input);
        const isCorrect = result === test.expected;

        console.log(`Test Case ${index + 1}: ${test.description}`);
        console.log(`Input:    [${test.input.join(', ')}]`);
        console.log(`Output:   ${result}`);
        console.log(`Expected: ${test.expected}`);
        console.log(`Result:   ${isCorrect ? '✅ Passed' : '❌ Failed'}`);
        console.log('-----------------------------------');
    });
}

runTests();