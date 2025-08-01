/**
 * Removes duplicates from a sorted array in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same.
 *
 * This solution uses the Two Pointers (Slow and Fast) pattern.
 *
 * @param {number[]} nums
 * @return {number} The new length of the array after removing duplicates.
 */
function removeDuplicates(nums) {
    // Edge case: if the array is empty, there are no duplicates to remove.
    if (nums.length === 0) {
        return 0;
    }

    // 'slow' pointer: This pointer tracks the last unique element found.
    // It also represents the length of the new, modified array.
    let slow = 0;

    // 'fast' pointer: This pointer iterates through the entire array.
    // It's searching for the next unique element.
    for (let fast = 1; fast < nums.length; fast++) {
        // Compare the elements at the 'slow' and 'fast' pointers.
        // If they are NOT equal, it means we've found a new unique number.
        if (nums[fast] !== nums[slow]) {
            // We've found a unique element.
            // First, increment the 'slow' pointer to move to the next position.
            slow++;
            // Then, copy the unique element from the 'fast' pointer's position
            // to the new 'slow' pointer's position.
            nums[slow] = nums[fast];
        }
        // If nums[fast] === nums[slow], it's a duplicate.
        // We do nothing, and the 'fast' pointer will simply move to the next element
        // in the next loop iteration, continuing its search.
    }

    // The 'slow' pointer is 0-indexed, so the number of unique elements
    // is slow + 1. This is the new length of the array.
    return slow + 1;
}

// --- Example Usage and Test Cases ---

// Example 1: Basic case with duplicates
let nums1 = [1, 1, 2];
let expectedNums1 = [1, 2];
let k1 = removeDuplicates(nums1);

console.log(`Original array: [1, 1, 2]`);
console.log(`New length (k): ${k1}`);
console.log(`Modified array (first ${k1} elements): ${nums1.slice(0, k1)}`);
console.log(`Is the result correct? ${JSON.stringify(nums1.slice(0, k1)) === JSON.stringify(expectedNums1)}`);
// Expected Output:
// New length (k): 2
// Modified array (first 2 elements): 1,2
// Is the result correct? true

console.log('-----------------------------------');

// Example 2: More complex case with multiple duplicates
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let expectedNums2 = [0, 1, 2, 3, 4];
let k2 = removeDuplicates(nums2);

console.log(`Original array: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]`);
console.log(`New length (k): ${k2}`);
console.log(`Modified array (first ${k2} elements): ${nums2.slice(0, k2)}`);
console.log(`Is the result correct? ${JSON.stringify(nums2.slice(0, k2)) === JSON.stringify(expectedNums2)}`);
// Expected Output:
// New length (k): 5
// Modified array (first 5 elements): 0,1,2,3,4
// Is the result correct? true

console.log('-----------------------------------');

// Example 3: No duplicates
let nums3 = [1, 2, 3, 4, 5];
let expectedNums3 = [1, 2, 3, 4, 5];
let k3 = removeDuplicates(nums3);

console.log(`Original array: [1, 2, 3, 4, 5]`);
console.log(`New length (k): ${k3}`);
console.log(`Modified array (first ${k3} elements): ${nums3.slice(0, k3)}`);
console.log(`Is the result correct? ${JSON.stringify(nums3.slice(0, k3)) === JSON.stringify(expectedNums3)}`);
// Expected Output:
// New length (k): 5
// Modified array (first 5 elements): 1,2,3,4,5
// Is the result correct? true

console.log('-----------------------------------');

// Example 4: Empty array
let nums4 = [];
let expectedNums4 = [];
let k4 = removeDuplicates(nums4);

console.log(`Original array: []`);
console.log(`New length (k): ${k4}`);
console.log(`Modified array (first ${k4} elements): ${nums4.slice(0, k4)}`);
console.log(`Is the result correct? ${JSON.stringify(nums4.slice(0, k4)) === JSON.stringify(expectedNums4)}`);
// Expected Output:
// New length (k): 0
// Modified array (first 0 elements):
// Is the result correct? true