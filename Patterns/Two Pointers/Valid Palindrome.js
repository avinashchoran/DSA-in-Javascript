/**
 * Helper function to determine if a character is not a letter or a digit.
 * @param {string} char - The character to test.
 * @returns {boolean} - True if the character is non-alphanumeric.
 */
function isNonAlphaNumeric(char) {
    // This regex checks if the character is NOT a letter (a-z, A-Z) or a digit (0-9)
    return /[^a-zA-Z0-9]/.test(char);
}

/**
 * Checks if a string is a palindrome, considering only alphanumeric characters and ignoring case.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward.
 *
 * @param {string} s - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 *
 * @time_complexity O(n) - where n is the length of the string.
 * @space_complexity O(1) - as we are not using any extra space that scales with the input size.
 *
 * --- Why is the time complexity O(n) and not O(n^2)? ---
 * It might seem like the nested `while` loops would lead to a quadratic O(n^2) complexity.
 * However, that's not the case here. Each pointer, `p1` and `p2`, only ever moves in one direction
 * across the string. `p1` only increments, and `p2` only decrements.
 *
 * The inner `while` loops are for skipping non-alphanumeric characters, but they don't reset the pointers.
 * In the worst-case scenario, each pointer will traverse its half of the string exactly once.
 * The total number of steps is proportional to the length of the string (n), making the complexity linear, or O(n).
 */
function isPalindrome(s) {
    let p1 = 0;
    let p2 = s.length - 1;

    while (p1 < p2) {
        // --- Pointer Advancement ---
        // Move p1 forward if it's pointing to a non-alphanumeric character.
        while (p1 < p2 && isNonAlphaNumeric(s[p1])) {
            p1++;
        }

        // Move p2 backward if it's pointing to a non-alphanumeric character.
        while (p1 < p2 && isNonAlphaNumeric(s[p2])) {
            p2--;
        }

        // --- Character Comparison ---
        // After ensuring both pointers are on alphanumeric characters, compare them.
        // We convert to lowercase for a case-insensitive comparison.
        if (s[p1].toLowerCase() !== s[p2].toLowerCase()) {
            // If they don't match, we know it's not a palindrome.
            return false;
        }

        // If they match, move both pointers inward to check the next pair of characters.
        p1++;
        p2--;
    }

    // If the loop completes without finding any mismatches, the string is a palindrome.
    return true;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
console.log(isPalindrome(" ")); // Output: true (an empty string or string with only non-alphanumeric chars is a palindrome)