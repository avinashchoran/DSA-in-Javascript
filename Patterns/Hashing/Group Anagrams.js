/**
 * Given an array of strings, groups anagrams together.
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * @param {string[]} strs - An array of strings.
 * @returns {string[][]} An array of arrays, where each inner array contains a group of anagrams.
 */
var groupAnagrams = function(strs) {
    // A hash map (Map in JavaScript) to store the grouped anagrams.
    // Keys are the sorted strings (canonical representation), and values are arrays of the original strings.
    let hashmap = new Map();
    
    // Iterate over each string in the input array.
    strs.forEach((i) => {
        // Create the unique canonical key by sorting the string's characters.
        // For example, "eat", "tea", and "ate" all become "aet".
        let x = i.split("").sort().join("");
        
        // If the key exists, push the current string into the existing list.
        if (hashmap.has(x)) {
           hashmap.get(x).push(i);
        }
        // If the key does not exist, create a new entry with the current string in a new array.
        else {
            hashmap.set(x, [i]);
        }
    });
    
    // Convert the values (the arrays of anagrams) from the hash map into a final array.
    const output = Array.from(hashmap.values());
    return output;
};

/**
 * A more concise and common implementation of the Group Anagrams solution.
 * This version uses a similar hashing approach but combines the conditional logic
 * into a single line for a more compact and readable implementation.
 *
 * @param {string[]} strs - An array of strings.
 * @returns {string[][]} An array of arrays, where each inner array contains a group of anagrams.
 */
var groupAnagramsEfficient = function(strs) {
    const map = new Map();

    for (const str of strs) {
        // Sort the current string to get the canonical key.
        const sortedStr = str.split('').sort().join('');

        // Get the list of anagrams for the key. If the key doesn't exist,
        // it returns undefined. The `|| []` provides a default empty array.
        // The current string is then pushed into this list.
        const list = map.get(sortedStr) || [];
        list.push(str);

        // Set the updated list back into the map with the same key.
        map.set(sortedStr, list);
    }

    // Return the values of the map, which are the grouped arrays of anagrams.
    return Array.from(map.values());
};


// --- Example Usage ---

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log("--- My Solution Output ---");
const mySolutionOutput = groupAnagrams(strs);
console.log(JSON.stringify(mySolutionOutput)); // Expected output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

console.log("\n--- Efficient Solution Output ---");
const efficientSolutionOutput = groupAnagramsEfficient(strs);
console.log(JSON.stringify(efficientSolutionOutput)); // Expected output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
