/**
 * Solution for the "Is Subsequence" problem using the Two Pointers pattern.
 *
 * This implementation efficiently determines if one string is a subsequence of another
 * with a time complexity of O(N), where N is the length of the target string 't'.
 *
 * The core idea is to use two pointers: one for the subsequence string 's' and one
 * for the target string 't'. We iterate through 't' and advance the pointer for 's'
 * only when a character match is found. If we successfully traverse the entire 's'
 * string, it means all its characters were found in 't' in the correct order.
 *
 * @param {string} s The potential subsequence string.
 * @param {string} t The target string to search within.
 * @returns {boolean} True if 's' is a subsequence of 't', otherwise false.
 */
const isSubsequence = function (s, t) {
    // Pointer for the subsequence string 's'.
    let sPointer = 0;
    // Pointer for the target string 't'.
    let tPointer = 0;

    // Loop until we have checked all characters in either string.
    while (sPointer < s.length && tPointer < t.length) {
        // If the characters at the current pointers match, it means we have found
        // the next character of the subsequence in the correct order.
        // So, we advance the pointer for the subsequence string 's'.
        if (s[sPointer] === t[tPointer]) {
            sPointer++;
        }

        // Always advance the pointer for the target string 't' to continue searching.
        tPointer++;
    }

    // After the loop, if the 's' pointer has reached the end of the 's' string,
    // it means every character in 's' was found in 't' in the correct sequence.
    return sPointer === s.length;
};

// --------------------------------------------------------------------------------------
// My Initial Attempt (as a learning example)
// --------------------------------------------------------------------------------------
/*
// This was my initial implementation. It is functionally identical to the final
// solution but uses less descriptive variable names ('a', 'b'). The final version
// improves on this by using 'sPointer' and 'tPointer' for better readability,
// which is a good practice in coding.
var isSubsequence_initial = function (s, t) {
  let a = 0;
  let b = 0;
  const a_len = s.length;
  const b_len = t.length;

  while (a < a_len && b < b_len) {
    if (s[a] === t[b]) {
      a++;
    }
    b++;
  }

  return a === a_len;
};
*/

// --- Test Cases ---
function runTests() {
    const testCases = [
        { s: "abc", t: "ahbgdc", expected: true, description: "Example 1" },
        { s: "axc", t: "ahbgdc", expected: false, description: "Example 2" },
        { s: "ace", t: "abcde", expected: true, description: "Subsequence with gaps" },
        { s: "aec", t: "abcde", expected: false, description: "Incorrect order" },
        { s: "", t: "ahbgdc", expected: true, description: "Empty subsequence" },
        { s: "a", t: "", expected: false, description: "Empty target" },
        { s: "b", t: "abc", expected: true, description: "Single character subsequence" },
    ];

    console.log("--- Testing isSubsequence ---");
    testCases.forEach((test, index) => {
        const result = isSubsequence(test.s, test.t);
        const isCorrect = result === test.expected;

        console.log(`Test Case ${index + 1}: ${test.description}`);
        console.log(`Input:    s="${test.s}", t="${test.t}"`);
        console.log(`Output:   ${result}`);
        console.log(`Expected: ${test.expected}`);
        console.log(`Result:   ${isCorrect ? '✅ Passed' : '❌ Failed'}`);
        console.log('-----------------------------------');
    });
}

runTests();
