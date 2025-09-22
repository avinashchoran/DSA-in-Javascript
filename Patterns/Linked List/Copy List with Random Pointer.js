// filepath: Patterns/Linked List/Copy List with Random Pointer.js
/**
 * Question: Copy List with Random Pointer
 * Difficulty: Medium
 * Problem Description:
 * You are given a linked list where each node has a `val`, a `next` pointer, and a `random` pointer. The `random` pointer can point to any node in the list, or `null`. Create a deep copy of this list. The deep copy should be a new list with new nodes, where the values and pointers of the new nodes are the same as the original list.
 *
 * Constraints:
 * - The number of nodes in the linked list is in the range `[0, 1000]`.
 * - `-10000 <= Node.val <= 10000`
 * - `Node.random` is `null` or points to a node in the list.
 *
 * Example:
 * Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
 *
 * LeetCode URL: https://leetcode.com/problems/copy-list-with-random-pointer/
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) {
        return null;
    }

    const map = new Map();

    // First pass: create new nodes and map original nodes to new nodes
    let current = head;
    while (current) {
        map.set(current, new Node(current.val));
        current = current.next;
    }

    // Second pass: set next and random pointers
    current = head;
    while (current) {
        const newNode = map.get(current);
        newNode.next = map.get(current.next) || null;
        newNode.random = map.get(current.random) || null;
        current = current.next;
    }

    return map.get(head);
};
