/**
 * Solution for "Longest Substring with Same Letters after Replacement".
 *
 * This implementation uses the dynamic Sliding Window pattern with an optimization.
 * The core idea is to find the longest window where the number of non-dominant characters
 * is less than or equal to `k`. The number of characters to change is
 * (Current Window Size - Count of Most Frequent Character).
 *
 * The optimization involves tracking the most frequent character count in O(1) time
 * by only updating it when a new, more frequent character is added to the window.
 * This prevents a costly O(N) operation inside the main O(N) loop.
 *
 * Time Complexity: O(N) - The outer loop runs once, and the inner shrinking logic
 * also processes each character at most once.
 * Space Complexity: O(1) - The map will store at most 26 characters (for a-z),
 * so it's a constant space overhead.
 *
 * @param {string} str The input string.
 * @param {number} k The number of replacements allowed.
 * @returns {number} The length of the longest valid substring.
 */
const longest = function(str, k) {
    // A map to store the frequency of characters in the current window.
    const charFrequencyMap = new Map();
    // Pointer for the start of the sliding window.
    let windowStart = 0;
    // Stores the count of the most frequent character in the current window.
    // This is optimized to be updated in O(1) time.
    let maxFrequencyCount = 0;
    // Stores the maximum length of a valid substring found so far.
    let maxLength = 0;

    // Iterate through the string using 'windowEnd' to expand the window.
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        // Add the character to the map and update its frequency.
        charFrequencyMap.set(rightChar, (charFrequencyMap.get(rightChar) || 0) + 1);

        // Update the maxFrequencyCount with the new character's frequency.
        // This is an O(1) operation.
        maxFrequencyCount = Math.max(maxFrequencyCount, charFrequencyMap.get(rightChar));

        // This is the core condition for shrinking the window.
        // If the number of characters we need to change (window size - maxFrequencyCount)
        // is greater than our budget 'k', we must shrink the window.
        if ((windowEnd - windowStart + 1) - maxFrequencyCount > k) {
            const leftChar = str[windowStart];
            // Decrement the frequency of the character at the start of the window.
            charFrequencyMap.set(leftChar, charFrequencyMap.get(leftChar) - 1);

            // If the frequency becomes zero, it means it's no longer in the window,
            // so we can delete it from the map.
            if (charFrequencyMap.get(leftChar) === 0) {
                charFrequencyMap.delete(leftChar);
            }
            // Shrink the window by moving the 'windowStart' pointer to the right.
            windowStart++;
        }

        // The current window is guaranteed to be a valid candidate.
        // Update the maxLength found so far.
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}
// --- Test Cases ---
function runTests() {
    const testCases = [
        { str: "aabccbb", k: 2, expected: 5, description: "Example 1" },
        { str: "abbcb", k: 1, expected: 4, description: "Example 2" },
        { str: "abccde", k: 1, expected: 3, description: "Example 3" },
        { str: "AABABBA", k: 1, expected: 4, description: "LeetCode example" },
        { str: "a", k: 1, expected: 1, description: "Single character string" },
        { str: "aaaaa", k: 2, expected: 5, description: "All same characters" },
    ];

    console.log("--- Testing longest ---");
    testCases.forEach((test, index) => {
        const result = longest(test.str, test.k);
        const isCorrect = result === test.expected;

        console.log(`Test Case ${index + 1}: ${test.description}`);
        console.log(`Input:    str="${test.str}", k=${test.k}`);
        console.log(`Output:   ${result}`);
        console.log(`Expected: ${test.expected}`);
        console.log(`Result:   ${isCorrect ? '✅ Passed' : '❌ Failed'}`);
        console.log('-----------------------------------');
    });
}

runTests();
