/**
 * Question: Reverse a Linked List
 * * Problem Description:
 * Given the `head` of a singly linked list, reverse the list, and return the
 * reversed list's `head`.
 *
 * Example 1:
 * Input: `head = [1, 2, 3, 4, 5]`
 * Output: `[5, 4, 3, 2, 1]`
 *
 * Example 2:
 * Input: `head = [1, 2]`
 * Output: `[2, 1]`
 *
 * Example 3:
 * Input: `head = []`
 * Output: `[]`
 *
 * Solution Approach:
 * This solution uses an iterative approach with three pointers to reverse the
 * linked list in a single pass. It has an optimal O(N) time complexity
 * and O(1) space complexity.
 *
 * The three pointers are used to keep track of the `previous` node, the
 * `current` node being reversed, and the `temp` node to save the reference to
 * the next node before the pointer is reversed.
 *
 * Definition for a singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // Pointer to keep track of the previously processed node. It starts at null.
    let previous = null;
    // Pointer to the current node being processed. It starts at the head.
    let current = head;

    // Loop continues as long as there are nodes to process.
    while (current !== null) {
        // Step 1: Save the next node. This is crucial to not lose our place in the list.
        let temp = current.next;

        // Step 2: Reverse the current node's pointer to point to the 'previous' node.
        current.next = previous;

        // Step 3: Move the 'previous' pointer one step forward.
        previous = current;

        // Step 4: Move the 'current' pointer one step forward using the saved reference.
        current = temp;
    }

    // After the loop, the 'previous' pointer will be pointing to the new head of the reversed list.
    return previous;
};

// --------------------------------------------------------------------------------------
// My Initial Attempt (as a learning example)
// --------------------------------------------------------------------------------------
/*
// This solution is an excellent and optimal implementation. This commented
// block is here to maintain a consistent structure with other solutions.
var reverseList = function(head) {
    let previous = null;
    let current = head;
    while (current !== null) {
        let temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }
    return previous;
};
*/
