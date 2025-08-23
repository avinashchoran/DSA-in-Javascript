// Question: Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Solution:
    
    // 1. Create a hash map to store the frequency of each number.
    // The keys will be the numbers from the input array, and the values will be their counts.
    const freqMap = {};
    
    // 2. Iterate through the input array 'nums' to populate the frequency map.
    // For each number, if it's already in the map, increment its count.
    // Otherwise, add it to the map with a count of 1.
    for (const num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }
    
    // 3. Convert the frequency map into an array of key-value pairs.
    // The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
    const entries = Object.entries(freqMap);
    
    // 4. Sort the array of entries based on the frequency (the second element of each pair) in descending order.
    // The sort() method sorts the elements of an array in place and returns the sorted array.
    // We use a custom compare function (a, b) => b[1] - a[1] to sort from highest frequency to lowest.
    entries.sort((a, b) => b[1] - a[1]);
    
    // 5. Create an empty array to store the result.
    const result = [];
    
    // 6. Iterate through the sorted entries from index 0 to k-1.
    // Push the number (the first element of each pair) into the result array.
    for (let i = 0; i < k; i++) {
        result.push(Number(entries[i][0]));
    }
    
    // 7. Return the result array containing the k most frequent elements.
    return result;
};