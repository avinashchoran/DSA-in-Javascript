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

// Example Usage (for testing purposes)
const sol = new Solution();

const s1 = "eceba";
console.log(`Input: '${s1}', Output: ${sol.lengthOfLongestSubstringTwoDistinct(s1)}`); // Expected: 3

const s2 = "ccaabbb";
console.log(`Input: '${s2}', Output: ${sol.lengthOfLongestSubstringTwoDistinct(s2)}`); // Expected: 5

const s3 = "abcabcabc";
console.log(`Input: '${s3}', Output: ${sol.lengthOfLongestSubstringTwoDistinct(s3)}`); // Expected: 2 (e.g., "ab", "bc")

const s4 = "aa";
console.log(`Input: '${s4}', Output: ${sol.lengthOfLongestSubstringTwoDistinct(s4)}`); // Expected: 2

const s5 = "abaccc";
console.log(`Input: '${s5}', Output: ${sol.lengthOfLongestSubstringTwoDistinct(s5)}`); // Expected: 4 (e.g., "accc")
