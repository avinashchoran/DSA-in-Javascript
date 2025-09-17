// filepath: Patterns/Hashing/Jewels and Stones.js
// LeetCode: https://leetcode.com/problems/jewels-and-stones/

/*
 * @problem: Jewels and Stones
 * @difficulty: Easy
 * @summary: You're given strings `jewels` representing the types of stones that are jewels, and `stones` representing the stones you have. Each character in `stones` is a type of stone you have. You want to know how many of the stones you have are also jewels.
 * @constraints:
 * - 1 <= jewels.length, stones.length <= 50
 * - `jewels` and `stones` consist of only English letters.
 * - All the characters of `jewels` are unique.
 * @examples:
 * - Input: jewels = "aA", stones = "aAAbbbb" -> Output: 3
 * - Input: jewels = "z", stones = "ZZ" -> Output: 0
 */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewelSet = new Set(jewels);
    let count = 0;

    for (const stone of stones) {
        if (jewelSet.has(stone)) {
            count++;
        }
    }

    return count;
};


// --- Example Usage ---

const jewels1 = "aA";
const stones1 = "aAAbbbb";
console.log(`Input: jewels = "${jewels1}", stones = "${stones1}" -> Output:`, numJewelsInStones(jewels1, stones1)); // Expected: 3

const jewels2 = "z";
const stones2 = "ZZ";
console.log(`Input: jewels = "${jewels2}", stones = "${stones2}" -> Output:`, numJewelsInStones(jewels2, stones2)); // Expected: 0
