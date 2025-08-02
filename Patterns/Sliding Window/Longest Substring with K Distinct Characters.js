/**
 * Solution for the "Longest Substring with K Distinct Characters" problem.
 *
 * This implementation uses the dynamic Sliding Window pattern. The window size
 * is not fixed but grows and shrinks to satisfy a condition (at most K distinct characters).
 * The algorithm achieves O(N) time complexity because each character is processed
 * at most twice: once by the 'winEnd' pointer and once by the 'winStart' pointer.
 * The space complexity is O(K) as the HashMap will store at most K+1 distinct characters.
 *
 * @param {string} str The input string.
 * @param {number} k The maximum number of distinct characters allowed in the substring.
 * @returns {number} The length of the longest valid substring.
 */
const longest = function(str, k) {
    // Pointer for the start of the sliding window.
    let windowStart = 0;
    // Variable to track the maximum length found so far.
    let maxLength = 0;
    // A Map to store the frequency of characters in the current window.
    const charFrequencyMap = new Map();

    // Iterate through the string using 'windowEnd' to expand the window.
    // This for loop ensures a single pass over the entire string.
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        // Add the character to the map and update its frequency.
        charFrequencyMap.set(rightChar, (charFrequencyMap.get(rightChar) || 0) + 1);

        // This is the core logic: if the number of distinct characters in the map
        // exceeds 'k', we need to shrink the window from the left.
        // We use a 'while' loop because we might need to remove multiple characters
        // to satisfy the condition again.
        while (charFrequencyMap.size > k) {
            const leftChar = str[windowStart];
            // Decrement the frequency of the character at the start of the window.
            charFrequencyMap.set(leftChar, charFrequencyMap.get(leftChar) - 1);

            // If the frequency of this character becomes zero, it means it's
            // no longer in the window, so we remove it from the map.
            if (charFrequencyMap.get(leftChar) === 0) {
                charFrequencyMap.delete(leftChar);
            }
            // Shrink the window by moving the 'windowStart' pointer to the right.
            windowStart++;
        }

        // After expanding and potentially shrinking the window, the current window
        // is guaranteed to be a valid candidate.
        // Update the maximum length found so far.
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
};

// --------------------------------------------------------------------------------------
// My Initial Attempt (as a learning example)
// --------------------------------------------------------------------------------------
/*
// This solution is functionally correct but the pointer logic is less
// conventional and can be harder to follow for complex problems.
var longest = function(str,k) {
    let longest = 0;
    let winSize = 1
    let winStart = 0 ,winEnd = 0
    const myMap = new Map();
    while(winEnd <= str.length - 1) {
        if(myMap.has(str[winEnd])) {
            myMap.set(str[winEnd], myMap.get(str[winEnd]) + 1);
        } else {
            myMap.set(str[winEnd], 1);
        }
        if(myMap.size <= k) {
            if(winSize > longest) {
                longest = winSize
            }
            winEnd++
            winSize++
        } else {
            if(myMap.get(str[winStart]) > 1) {
                myMap.set(str[winStart], myMap.get(str[winStart]) - 1)
            } else {
                myMap.delete(str[winStart])
            }
            winStart++
            winSize--
        }
    }
    return longest
};
*/

// --- Test Cases ---
function runTests() {
    const testCases = [
        { str: "araaci", k: 2, expected: 4, description: "Example 1" },
        { str: "araaci", k: 1, expected: 2, description: "Example 2" },
        { str: "cbbebi", k: 3, expected: 5, description: "Example 3" },
        { str: "cbbebi", k: 10, expected: 6, description: "k is larger than string length" },
        { str: "a", k: 1, expected: 1, description: "Single character string" },
        { str: "aaaaa", k: 1, expected: 5, description: "All same characters" },
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
