/**
 * Intersection of Two Arrays II
 * Difficulty: Easy
 *
 * Problem (paraphrased):
 * Given two integer arrays, return an array that represents their intersection.
 * Each element in the result must appear as many times as it shows in both arrays.
 * The order of elements in the result does not matter.
 *
 * Constraints:
 * - 1 <= nums1.length, nums2.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 *
 * Examples:
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 *
 * Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [4,9] (order may vary)
 *
 * Approach:
 * Use a hash map to count frequencies of elements in the smaller array (to save space).
 * Then iterate the other array and collect elements that exist in the map (decrementing counts).
 *
 * Time Complexity: O(n + m) where n and m are the lengths of the two arrays.
 * Space Complexity: O(min(n, m)) for the frequency map and output.
 */

var intersect = function(nums1, nums2) {
  // Ensure we build the frequency map for the smaller array to reduce space usage.
  if (nums1.length > nums2.length) {
    // swap so nums1 is the smaller
    [nums1, nums2] = [nums2, nums1];
  }

  const freq = new Map();
  for (const num of nums1) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  const result = [];
  for (const num of nums2) {
    if (freq.has(num) && freq.get(num) > 0) {
      result.push(num);
      freq.set(num, freq.get(num) - 1);
    }
  }

  return result;
};

// --- Example Usage and Tests ---
console.log('--- Testing intersect ---');

const t1a = [1, 2, 2, 1];
const t1b = [2, 2];
console.log(`Input: ${JSON.stringify(t1a)} & ${JSON.stringify(t1b)}`);
console.log(`Output: ${JSON.stringify(intersect(t1a, t1b))}`); // Expected: [2,2]

console.log('-----------------------------------');

const t2a = [4, 9, 5];
const t2b = [9, 4, 9, 8, 4];
console.log(`Input: ${JSON.stringify(t2a)} & ${JSON.stringify(t2b)}`);
console.log(`Output: ${JSON.stringify(intersect(t2a, t2b))}`); // Expected: [4,9] (order may vary)

console.log('-----------------------------------');

const t3a = [1,1,2,3];
const t3b = [1,2,2,3,3];
console.log(`Input: ${JSON.stringify(t3a)} & ${JSON.stringify(t3b)}`);
console.log(`Output: ${JSON.stringify(intersect(t3a, t3b))}`); // Expected: [1,2,3] (with correct counts)


// LeetCode: https://leetcode.com/problems/intersection-of-two-arrays-ii/