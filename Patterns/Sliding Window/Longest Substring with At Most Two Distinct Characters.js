/**
 * Description:
 * Given a string s, find the length of the longest substring that contains at most two distinct characters.
 *
 * Example 1:
 * Input: s = "eceba"
 * Output: 3
 * Explanation: The longest substring is "ece" which has two distinct characters ('e' and 'c').
 *
 * Example 2:
 * Input: s = "ccaabbb"
 * Output: 5
 * Explanation: The longest substring is "aabbb" which has two distinct characters ('a' and 'b').
 *
 * Constraints:
 * 1 <= s.length <= 10^5
 * s consists of English letters.
 *
 * Hint:
 * This is a classic dynamic sliding window problem. It's very similar to "Longest Substring with K Distinct Characters", but with k fixed at 2.
 * You'll need a way to keep track of the characters and their frequencies within your sliding window (a hash map/object/Map is perfect for this).
 * Expand your window from the right.
 * When the number of distinct characters in your window exceeds 2, you need to shrink the window from the left.
 * Remember to update the maximum length found so far.
 */
class Solution {
    /**
     * Finds the length of the longest substring that contains at most two distinct characters.
     * @param {string} s The input string.
     * @returns {number} The length of the longest substring.
     */
    lengthOfLongestSubstringTwoDistinct(s) {
        // Initialize variables for the sliding window
        let left = 0; // Left pointer of the window
        let maxLength = 0; // Stores the maximum length found so far

        // A Map to store the frequency of characters within the current window
        // Key: character, Value: count of the character
        const charCounts = new Map();

        // Iterate through the string with the right pointer
        for (let right = 0; right < s.length; right++) {
            const currentChar = s[right];
            // Add the current character (s[right]) to the window
            // Increment its count in the Map
            charCounts.set(currentChar, (charCounts.get(currentChar) || 0) + 1);

            // Check if the number of distinct characters in the window exceeds 2
            // The number of distinct characters is simply the size of the charCounts Map
            while (charCounts.size > 2) {
                const leftChar = s[left];
                // If there are more than 2 distinct characters, we need to shrink the window from the left
                // Decrement the count of the character at the left pointer (s[left])
                charCounts.set(leftChar, charCounts.get(leftChar) - 1);

                // If the count of s[left] becomes 0, it means this character is no longer in the window
                // So, remove it from the Map to reflect that it's no longer a distinct character
                if (charCounts.get(leftChar) === 0) {
                    charCounts.delete(leftChar);
                }

                // Move the left pointer one step to the right, effectively shrinking the window
                left++;
            }

            // After ensuring the window has at most 2 distinct characters,
            // calculate the current window's length (right - left + 1)
            // and update maxLength if the current length is greater
            maxLength = Math.max(maxLength, right - left + 1);
        }

        // Return the maximum length found
        return maxLength;
    }
}

// --- Test Cases ---
function runTests() {
    const sol = new Solution();
    const testCases = [
        // Provided examples
        { input: "eceba", expected: 3, description: "Example 1" },
        { input: "ccaabbb", expected: 5, description: "Example 2" },

        // Additional tests from original file
        { input: "abaccc", expected: 4, description: "Longest substring at the end" },
        { input: "abcabcabc", expected: 2, description: "Alternating distinct characters" },
        { input: "aa", expected: 2, description: "String with two same characters" },

        // Edge cases
        { input: "a", expected: 1, description: "Single character string" },
        { input: "ab", expected: 2, description: "String with exactly two distinct characters" },
        { input: "aaaaa", expected: 5, description: "String with one distinct character" },
        { input: "", expected: 0, description: "Empty string" },
        { input: "cdaba", expected: 3, description: "Longest substring in the middle ('aba')" },
    ];

    let failedTests = 0;
    console.log("Running tests for Longest Substring with At Most Two Distinct Characters...");
    testCases.forEach((test, index) => {
        const result = sol.lengthOfLongestSubstringTwoDistinct(test.input);
        if (result !== test.expected) {
            console.error(`\n❌ Test Case ${index + 1} Failed: ${test.description}`);
            console.error(`  Input:    "${test.input}"`);
            console.error(`  Expected: ${test.expected}`);
            console.error(`  Got:      ${result}`);
            failedTests++;
        }
    });

    console.log("\n--- Test Summary ---");
    if (failedTests === 0) {
        console.log(`✅ All ${testCases.length} test cases passed!`);
    } else {
        console.error(`${failedTests} out of ${testCases.length} tests failed.`);
    }
}

runTests();
