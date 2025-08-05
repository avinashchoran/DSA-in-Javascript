/**
 * Find the Smallest Subarray with a Given Sum
 *
 * Problem Description:
 * Given an array of positive integers arr and a positive integer S,
 * find the length of the smallest contiguous subarray whose sum is
 * greater than or equal to S.
 * If no such subarray exists, return 0.
 *
 * Example 1:
 * Input: arr = [2, 1, 5, 2, 3, 2], S = 7
 * Output: 2
 * Explanation: The smallest subarray with a sum greater than or equal to 7 is [5, 2].
 *
 * Example 2:
 * Input: arr = [2, 1, 5, 2, 8], S = 7
 * Output: 1
 * Explanation: The smallest subarray with a sum greater than or equal to 7 is [8].
 *
 * Example 3:
 * Input: arr = [3, 4, 1, 1, 6], S = 8
 * Output: 3
 * Explanation: The smallest subarray with a sum greater than or equal to 8 is [3, 4, 1].
 *
 *
 * Approach:
 * This problem is a classic example of the dynamic sliding window pattern.
 * We use a window that expands to the right and shrinks from the left.
 *
 * 1. Initialize `windowSum` to 0, `minLength` to infinity, and `windowStart` to 0.
 * 2. Iterate through the array with a `windowEnd` pointer, expanding the window.
 * 3. Add the element at `windowEnd` to `windowSum`.
 * 4. While the `windowSum` is greater than or equal to `S`, we have a valid subarray.
 * a. We update `minLength` with the current window's length (`windowEnd - windowStart + 1`).
 * b. To find a potentially smaller subarray, we shrink the window from the left.
 * c. Subtract the element at `windowStart` from `windowSum`.
 * d. Increment `windowStart` to move the window's starting point.
 * 5. After the loop, if `minLength` is still infinity, it means no valid subarray was found, so we return 0. Otherwise, we return `minLength`.
 */

/**
 * @param {number[]} arr A list of positive integers.
 * @param {number} S A positive integer.
 * @returns {number} The length of the smallest such subarray, or 0 if no such subarray exists.
 */
const findSmallestSubarray = (arr, S) => {
  // Initialize variables
  let windowSum = 0;          // Stores the sum of the elements in the current window
  let minLength = Infinity;   // Tracks the minimum length of a valid subarray
  let windowStart = 0;        // The left pointer of the sliding window

  // Iterate through the array with the right pointer of the window
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // Expand the window to the right and add the new element to the sum
    windowSum += arr[windowEnd];

    // Check if the current window sum meets the condition
    // This while loop shrinks the window from the left
    while (windowSum >= S) {
      // We've found a valid subarray, so we update minLength
      // The current length is calculated as (end index - start index + 1)
      minLength = Math.min(minLength, windowEnd - windowStart + 1);

      // To shrink the window, subtract the element at the window's start from the sum
      windowSum -= arr[windowStart];

      // Move the start of the window one position to the right
      windowStart++;
    }
  }

  // After the loop, if minLength is still Infinity, it means no valid subarray was found
  if (minLength === Infinity) {
    return 0;
  }

  // Return the minimum length found
  return minLength;
};

// --- Test Cases ---
console.log(`Example 1: Input: arr = [2, 1, 5, 2, 3, 2], S = 7, Output: ${findSmallestSubarray([2, 1, 5, 2, 3, 2], 7)}`); // Expected output: 2
console.log(`Example 2: Input: arr = [2, 1, 5, 2, 8], S = 7, Output: ${findSmallestSubarray([2, 1, 5, 2, 8], 7)}`);   // Expected output: 1
console.log(`Example 3: Input: arr = [3, 4, 1, 1, 6], S = 8, Output: ${findSmallestSubarray([3, 4, 1, 1, 6], 8)}`);   // Expected output: 3
console.log(`Example 4: Input: arr = [1, 2, 3], S = 10, Output: ${findSmallestSubarray([1, 2, 3], 10)}`); // Expected output: 0 (no valid subarray)