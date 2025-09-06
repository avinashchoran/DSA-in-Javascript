// filepath: Patterns/Linked List/Remove Nth Node From End of List.js
/**
 * Question: Remove Nth Node From End of List
 * Difficulty: Medium
 * Problem Description:
 * Given the `head` of a linked list, remove the nth node from the end of the list and return its head.
 * 
 * Constraints:
 * - The number of nodes in the list is sz.
 * - 1 <= sz <= 30
 * - 0 <= Node.val <= 100
 * - 1 <= n <= sz
 *
 * Example 1:
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 *
 * Example 2:
 * Input: head = [1], n = 1
 * Output: []
 *
 * Example 3:
 * Input: head = [1,2], n = 1
 * Output: [1]
 *
 * Solution Approach:
 * This solution uses a two-pointer technique. We initialize two pointers, `fast` and `slow`, both starting at the head of the list. The `fast` pointer is moved `n` steps ahead first. Then, both pointers are moved one step at a time until the `fast` pointer reaches the end of the list. At this point, the `slow` pointer will be at the node just before the one to be removed.
 *
 * A dummy node is used to handle edge cases, such as removing the head of the list.
 *
 * Definition for a singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Create a dummy node to simplify edge cases like removing the first node.
    let dummy = new ListNode(0);
    dummy.next = head;
    
    // Initialize two pointers, both starting at the dummy node.
    let fast = dummy;
    let slow = dummy;
    
    // Move the fast pointer n + 1 steps ahead.
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    // Move both pointers until the fast pointer reaches the end of the list.
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    
    // The slow pointer is now at the node before the one to be removed.
    // Skip the nth node from the end.
    slow.next = slow.next.next;
    
    // Return the head of the modified list.
    return dummy.next;
};

// LeetCode URL: https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// --------------------------------------------------------------------------------------
// My Initial Attempt (as a learning example)
// --------------------------------------------------------------------------------------
/*
// This section can be used to document an initial, perhaps less optimal, approach.
// For this problem, the two-pointer approach is standard and efficient.
var removeNthFromEndInitial = function(head, n) {
    // An alternative could be a two-pass algorithm.
    // First pass: find the length of the list.
    // Second pass: traverse to the (length - n)th node and remove it.
    
    let dummy = new ListNode(0);
    dummy.next = head;
    let length = 0;
    let first = head;
    while (first !== null) {
        length++;
        first = first.next;
    }
    
    length -= n;
    first = dummy;
    while (length > 0) {
        length--;
        first = first.next;
    }
    first.next = first.next.next;
    return dummy.next;
};
*/
