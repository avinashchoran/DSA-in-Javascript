/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

/*
Explanation:
The problem asks for the length of the longest consecutive sequence of elements in an unsorted array. The key constraint is that the algorithm must run in O(n) time.

A naive approach would be to sort the array first, which takes O(n log n) time, and then iterate through the sorted array to find the longest consecutive sequence. However, this doesn't meet the time complexity requirement.

To achieve O(n) time complexity, we can use a hash set (or a Map) to store the numbers in the input array. This allows for O(1) average time complexity for insertion and lookup.

The algorithm works as follows:
1. Create a hash set and add all the numbers from the input array to it. This takes O(n) time.
2. Initialize a variable `maxLength` to 0.
3. Iterate through each number in the input array. For each number, check if it's the start of a sequence. A number is the start of a sequence if the number `num - 1` is not in the hash set.
4. If the number is the start of a sequence, then we start counting the length of this sequence. We use a `currentLength` variable, initialized to 1. We then check for the presence of `num + 1`, `num + 2`, and so on, in the hash set, incrementing `currentLength` for each consecutive number found.
5. After the inner loop finishes, we update `maxLength` with the maximum of `maxLength` and `currentLength`.
6. After iterating through all the numbers, `maxLength` will hold the length of the longest consecutive sequence.

This approach has a time complexity of O(n) because although there are nested loops, the inner loop only runs for each number that is the start of a sequence. In total, the inner loop runs at most n times across all iterations of the outer loop. The space complexity is O(n) to store the numbers in the hash set.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const numSet = new Set(nums);
    let maxLength = 0;

    for (const num of numSet) {
        // Check if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }

            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
};
