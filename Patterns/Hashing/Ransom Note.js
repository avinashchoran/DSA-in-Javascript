// filepath: Patterns/Hashing/Ransom Note.js
/**
 * LeetCode Problem: Ransom Note
 * Difficulty: Easy
 * 
 * Problem Statement:
 * Given two strings, ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 * 
 * URL: https://leetcode.com/problems/ransom-note/
 * 
 * Constraints:
 * - 1 <= ransomNote.length, magazine.length <= 10^5
 * - ransomNote and magazine consist of lowercase English letters.
 * 
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 * 
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 * 
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // Create a hash map to store the frequency of characters in the magazine.
    const charCount = {};

    // Populate the hash map with characters from the magazine.
    for (const char of magazine) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Check if the ransom note can be constructed.
    for (const char of ransomNote) {
        // If a character is not in the hash map or its count is 0, we can't form the note.
        if (!charCount[char]) {
            return false;
        }
        // Decrement the count of the character used.
        charCount[char]--;
    }

    // If we have successfully iterated through the ransom note, it can be constructed.
    return true;
};

// --- Example Usage ---

const ransomNote1 = "a";
const magazine1 = "b";
console.log(`Can "${ransomNote1}" be constructed from "${magazine1}"?`, canConstruct(ransomNote1, magazine1)); // Expected: false

const ransomNote2 = "aa";
const magazine2 = "ab";
console.log(`Can "${ransomNote2}" be constructed from "${magazine2}"?`, canConstruct(ransomNote2, magazine2)); // Expected: false

const ransomNote3 = "aa";
const magazine3 = "aab";
console.log(`Can "${ransomNote3}" be constructed from "${magazine3}"?`, canConstruct(ransomNote3, magazine3)); // Expected: true
