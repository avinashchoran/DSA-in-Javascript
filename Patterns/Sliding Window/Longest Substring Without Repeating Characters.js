
/*
Given a string, find the length of the longest substring which has no repeating characters.

Example 1:

Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".
Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".
Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".
*/

/*
Approach:
This problem follows the Sliding Window pattern. We can use a similar dynamic sliding window strategy as discussed in Longest Substring with K Distinct Characters. We can use a HashMap to remember the last index of each character we have processed. Whenever we get a repeating character, we will shrink our sliding window to ensure that we always have distinct characters in the sliding window.

Time Complexity:
The time complexity of the above algorithm will be O(N) where ‘N’ is the number of characters in the input string.

Space Complexity:
The space complexity of the algorithm will be O(K) where K is the number of distinct characters in the input string. This is because, in the worst case, the whole string might not have any repeating character so the entire string will be added to the HashMap. In the worst case, we also need O(N) space for the resulting substring, which is bigger than the space required for the HashMap.
*/
const non_repeat_substring = function (str) {
  let windowStart = 0,
    maxLength = 0,
    charIndexMap = {};

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    // if the map already contains the 'rightChar', shrink the window from the beginning so that
    // we have only one occurrence of 'rightChar'
    if (rightChar in charIndexMap) {
      // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
      // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
    }

    // insert the 'rightChar' into the map
    charIndexMap[rightChar] = windowEnd;
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};
