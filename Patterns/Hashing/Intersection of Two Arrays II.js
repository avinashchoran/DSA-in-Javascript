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

## Current Problems

### Hashing
- [Contains Duplicate](Patterns/Hashing/Contains%20Duplicate.js)
- [Group Anagrams](Patterns/Hashing/Group%20Anagrams.js)
- [Intersection of Two Arrays II](Patterns/Hashing/Intersection%20of%20Two%20Arrays%20II.js)
- [Longest Consecutive Sequence](Patterns/Hashing/Longest%20Consecutive%20Sequence.js)
- [Top K Frequent Elements](Patterns/Hashing/Top%20K%20Frequent%20Elements.js)
- [Two Sum](Patterns/Hashing/Two%20Sum.js)
- [Valid Anagram](Patterns/Hashing/Valid%20Anagram.js)

### Kadane's algorithm
- (no files yet)

### Linked List
- [Add Two Numbers](Patterns/Linked%20List/Add%20Two%20Numbers.js)
- [Cycle Detection in a Linked List](Patterns/Linked%20List/Cycle%20Detection%20in%20a%20Linked%20List.js)
- [Merge Two Sorted Lists](Patterns/Linked%20List/Merge%20Two%20Sorted%20Lists.js)
- [Palindrome Linked List](Patterns/Linked%20List/Palindrome%20Linked%20List.js)
- [Remove Nth Node From End of List](Patterns/Linked%20List/Remove%20Nth%20Node%20From%20End%20of%20List.js)
- [Reverse a Linked List](Patterns/Linked%20List/Reverse%20a%20Linked%20List.js)

### Prefix Sum
- [Find Pivot Index](Patterns/Prefix%20Sum/Find%20Pivot%20Index.js)
- [Product of Array Except Self](Patterns/Prefix%20Sum/Product%20of%20Array%20Except%20Self.js)
- [Range Sum Query - Immutable](Patterns/Prefix%20Sum/Range%20Sum%20Query%20-%20Immutable.js)
- [Subarray Sum Equals K](Patterns/Prefix%20Sum/Subarray%20Sum%20Equals%20K.js)
- [Find the Highest Altitude](Patterns/Prefix%20Sum/Find%20the%20Highest%20Altitude.js)

### Sliding Window
- [Find the Smallest Subarray with a Given Sum](Patterns/Sliding%20Window/Find%20the%20Smallest%20Subarray%20with%20a%20Given%20Sum.js)
- [Maximum Sum Subarray of Size K](Patterns/Sliding%20Window/Maximum%20Sum%20Subarray%20of%20Size%20K.js)
- [Minimum Window Substring](Patterns/Sliding%20Window/Minimum%20Window%20Substring.js)
- [Permutation in a String](Patterns/Sliding%20Window/Permutation%20in%20a%20String.js)
- [Longest Substring with At Most Two Distinct Characters](Patterns/Sliding%20Window/Longest%20Substring%20with%20At%20Most%20Two%20Distinct%20Characters.js)
- [Longest Substring with K Distinct Characters](Patterns/Sliding%20Window/Longest%20Substring%20with%20K%20Distinct%20Characters.js)
- [Longest Substring with Same Letters After Replacement](Patterns/Sliding%20Window/Longest%20Substring%20with%20Same%20Letters%20After%20Replacement.js)
- [Longest Substring Without Repeating Characters](Patterns/Sliding%20Window/Longest%20Substring%20Without%20Repeating%20Characters.js)

### Two Pointers
- [Container With Most Water](Patterns/Two%20Pointers/Container%20With%20Most%20Water.js)
- [Move Zeros](Patterns/Two%20Pointers/Move%20Zeros.js)
- [Remove Duplicates](Patterns/Two%20Pointers/Remove%20Duplicates.js)
- [Two Sum (sorted array)](Patterns/Two%20Pointers/Two%20Sum.js)
- [Valid Palindrome](Patterns/Two%20Pointers/Valid%20Palindrome.js)

## Contributing

While this is a personal project, feedback and suggestions are always welcome! If you see a way to improve a solution or want to suggest a "must-know" problem, feel free to open an issue or a pull request.

---

If you'd like, I can:
- Add missing problem files to any pattern folder in the repo format.
- Generate a template for new problems that matches the repository style.
- Link specific functions or symbols to their implementations (e.g. [`findPermutation`](Patterns/Sliding%20Window/Permutation%20in%20a%20String.js)