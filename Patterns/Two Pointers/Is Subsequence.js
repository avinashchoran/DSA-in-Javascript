// filepath: Patterns/Two Pointers/Is Subsequence.js

/**
 * Title: Is Subsequence
 * Difficulty: Easy
 *
 * Problem:
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of theremaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 *
 * Constraints:
 * 0 <= s.length <= 100
 * 0 <= t.length <= 10^4
 * s and t consist only of lowercase English letters.
 *
 * Example 1:
 * Input: s = "abc", t = "ahbgdc"
 * Output: true
 *
 * Example 2:
 * Input: s = "axc", t = "ahbgdc"
 * Output: false
 *
 */

// LeetCode: https://leetcode.com/problems/is-subsequence/

/**
 * My Answer
 */
// class Solution:
//     def isSubsequence(self, s: str, t: str) -> bool:
//         a = b = 0
//         a_len = len(s)
//         b_len = len(t)
//
//         while a<a_len and b<b_len:
//             if s[a] == t[b]:
//                 a+=1
//             b+=1
//
//         return a == a_len

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequenceMyAnswer = function (s, t) {
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

/**
 * Actual Answer
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
};