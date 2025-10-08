/**
 * Reverses the vowels of a string.
 *
 * @param {string} s - The input string.
 * @returns {string} - The string with vowels reversed.
 *
 * @time_complexity O(n) - where n is the length of the string.
 * @space_complexity O(n) - as we are creating a new array to store the characters of the string.
 */
function reverseVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const s_list = s.split('');
    let left = 0;
    let right = s_list.length - 1;

    while (left < right) {
        if (!vowels.has(s_list[left])) {
            left++;
            continue;
        }
        if (!vowels.has(s_list[right])) {
            right--;
            continue;
        }
        [s_list[left], s_list[right]] = [s_list[right], s_list[left]];
        left++;
        right--;
    }

    return s_list.join('');
}

// Example usage:
console.log(reverseVowels("hello")); // Output: "holle"
console.log(reverseVowels("leetcode")); // Output: "leotcede"