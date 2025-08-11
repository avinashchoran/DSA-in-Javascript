/**
 * Permutation in a String
 *
 * Problem Description:
 * Given a string and a pattern, find out if the string contains any permutation of the pattern.
 * A permutation of the pattern is a rearrangement of its characters.
 *
 * Example 1:
 * Input: str = "oidbcaf", pattern = "abc"
 * Output: true
 * Explanation: The string contains "bca" which is a permutation of the given pattern.
 *
 * Example 2:
 * Input: str = "odicf", pattern = "dc"
 * Output: false
 * Explanation: No permutation of the pattern is present in the given string.
 *
 * Example 3:
 * Input: str = "bcdxabcdy", pattern = "bcdyabcdx"
 * Output: true
 * Explanation: Both the string and the pattern are a permutation of each other.
 *
 * Example 4:
 * Input: str = "aaacb", pattern = "abc"
 * Output: true
 * Explanation: The string contains "acb" which is a permutation of the given pattern.
 *
 * Approach:
 * This problem can be efficiently solved using the Sliding Window pattern.
 * We can maintain a window in the string with the same size as the pattern's length.
 * We also need to keep track of the character frequencies of the pattern.
 *
 * 1. Create a frequency map of the characters in the `pattern`.
 * 2. Initialize `windowStart = 0` and `matched = 0`.
 * 3. Iterate through the `str` with a `windowEnd` pointer.
 * 4. If the character at `windowEnd` is in the pattern's frequency map, decrement its count.
 * 5. If the character's count becomes 0 after decrementing, it means we have a complete match for that character, so we increment `matched`.
 * 6. When `matched` is equal to the number of distinct characters in the pattern, we have found a permutation.
 * 7. If the window size is larger than the pattern's length, we need to shrink the window from the left.
 * 8. When shrinking, if the character at `windowStart` was a required character (count 0), its count in the map will now be incremented to 1, so we decrement `matched`.
 * 9. Add the character back to the frequency map by incrementing its count.
 */

/**
 * @param {string} str The string to search in.
 * @param {string} pattern The pattern to find a permutation of.
 * @returns {boolean} True if a permutation is found, otherwise false.
 */
const findPermutation = (str, pattern) => {
  let windowStart = 0;
  let matched = 0;
  const charFrequency = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (!(char in charFrequency)) {
      charFrequency[char] = 0;
    }
    charFrequency[char] += 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFrequency).length) {
      return true;
    }

    if (windowEnd >= pattern.length - 1) {
      const leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }

  return false;
};

// --- Test Cases ---
console.log(`Example 1: Input: str = "oidbcaf", pattern = "abc", Output: ${findPermutation("oidbcaf", "abc")}`); // Expected output: true
console.log(`Example 2: Input: str = "odicf", pattern = "dc", Output: ${findPermutation("odicf", "dc")}`); // Expected output: false
console.log(`Example 3: Input: str = "bcdxabcdy", pattern = "bcdyabcdx", Output: ${findPermutation("bcdxabcdy", "bcdyabcdx")}`); // Expected output: true
console.log(`Example 4: Input: str = "aaacb", pattern = "abc", Output: ${findPermutation("aaacb", "abc")}`); // Expected output: true
