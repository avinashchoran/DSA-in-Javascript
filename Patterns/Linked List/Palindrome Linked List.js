/**
 * Question: Palindrome Linked List
 * * Problem Description:
 * Given the `head` of a singly linked list, determine if it is a palindrome.
 * A linked list is a palindrome if it reads the same forwards and backwards.
 *
 * Example 1:
 * Input: `head = [1, 2, 2, 1]`
 * Output: `true`
 *
 * Example 2:
 * Input: `head = [1, 2]`
 * Output: `false`
 *
 * Constraints:
 * - The number of nodes in the list is between 0 and 10^5.
 * - 0 <= Node.val <= 9
 *
 * Solution Approach:
 * This solution achieves an optimal O(N) time and O(1) space complexity.
 * It follows a three-step process:
 * 1. Find the middle of the list using a fast and slow pointer.
 * 2. Reverse the second half of the list.
 * 3. Compare the first half with the reversed second half.
 *
 * Definition for a singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // Edge case: an empty list or a list with one node is a palindrome.
    if (!head || !head.next) {
        return true;
    }

    // Step 1: Find the middle of the linked list using the "slow and fast" pointer technique.
    // The fast pointer moves two steps at a time, while the slow pointer moves one.
    // The condition `fast && fast.next` correctly handles both odd and even length lists.
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // At this point, 'slow' is at the start of the second half of the list.
    // We now reverse this second half.

    // Step 2: Reverse the second half of the linked list.
    // We use the same three-pointer logic from the previous problem.
    let previous = null;
    let current = slow; // Start reversing from the middle of the list.
    while (current !== null) {
        let temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }

    // After the loop, 'previous' is the new head of the reversed second half.
    let secondHalf = previous;
    let firstHalf = head;

    // Step 3: Compare the first half of the original list with the reversed second half.
    // We can stop when either pointer becomes null.
    while (secondHalf !== null) {
        // Correctly check the 'val' property for comparison.
        if (firstHalf.val !== secondHalf.val) {
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    // If the loop completes without finding a mismatch, it's a palindrome.
    return true;
};

// --------------------------------------------------------------------------------------
// My Initial Attempt (as a learning example)
// --------------------------------------------------------------------------------------
/*
// This solution had a few syntax and logic issues, which have been corrected
// in the final version above. It's an excellent example of a strong initial approach.
var isPalindrome = function(head) {
    let slow = 0
    let fast = 0
    slow=fast=head
    while(fast){
        slow = slow.next
        fast = fast.next.next
    }
    console.log(slow,fast)
    let previous = 0
     while (slow !== null) {
        let temp = slow.next
        slow.next=previous
        previous = slow
        slow = temp
    }
    let original = head
    while(previous){
        if(previous.value!=original.value){
            return false
        }
        previous=previous.next
        original = original.next
        
    }
    return true
};
*/
