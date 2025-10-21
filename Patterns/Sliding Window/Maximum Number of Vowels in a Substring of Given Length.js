/**
 * Solution for the "Maximum Number of Vowels in a Substring of Given Length" problem.
 *
 * This implementation uses the Sliding Window pattern for an efficient O(N) time complexity.
 *
 * The core idea is to maintain a "window" of size `k` and a count of vowels within that window.
 * As we slide the window across the string, we update the vowel count in O(1) time by
 * checking the character entering and leaving the window.
 *
 * @param {string} s The input string.
 * @param {number} k The length of the substring.
 * @returns {number} The maximum number of vowel letters in any substring of length `k`.
 */
const maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxVowelCount = 0;
    let currentVowelCount = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        // If the character entering the window is a vowel, increment the count.
        if (vowels.has(s[windowEnd].toLowerCase())) {
            currentVowelCount++;
        }

        // Once the window size is equal to k, we can start sliding.
        if (windowEnd - windowStart + 1 === k) {
            // Update the maximum vowel count found so far.
            maxVowelCount = Math.max(maxVowelCount, currentVowelCount);

            // If the character leaving the window is a vowel, decrement the count.
            if (vowels.has(s[windowStart].toLowerCase())) {
                currentVowelCount--;
            }

            // Slide the window forward.
            windowStart++;
        }
    }

    return maxVowelCount;
};

// --- Test Cases ---
function runTests() {
    const testCases = [
        { s: "abciiidef", k: 3, expected: 3, description: "Example 1" },
        { s: "aeiou", k: 2, expected: 2, description: "Example 2" },
        { s: "leetcode", k: 3, expected: 2, description: "Example 3" },
        { s: "rhythms", k: 4, expected: 0, description: "No vowels" },
        { s: "tryhard", k: 4, expected: 1, description: "Single vowel in window" },
        { s: "weallloveyou", k: 7, expected: 4, description: "General case" },
        { s: "AbcIiIdEf", k: 3, expected: 3, description: "Mixed case vowels" }
    ];

    console.log("--- Testing maxVowels ---");
    testCases.forEach((test, index) => {
        const result = maxVowels(test.s, test.k);
        const isCorrect = result === test.expected;

        console.log(`Test Case ${index + 1}: ${test.description}`);
        console.log(`Input:    s="${test.s}", k=${test.k}`);
        console.log(`Output:   ${result}`);
        console.log(`Expected: ${test.expected}`);
        console.log(`Result:   ${isCorrect ? '✅ Passed' : '❌ Failed'}`);
        console.log('-----------------------------------');
    });
}

runTests();
