// filepath: Patterns/Linked List/Reorder List.js
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

// Problem: Reorder List
// Difficulty: Medium
// Problem Description:
// You are given the head of a singly linked-list. The list can be represented as:
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only the nodes themselves may be changed.

// Constraints:
// The number of nodes in the list is in the range [1, 5 * 10^4].
// 1 <= Node.val <= 1000

// Example 1:
// Input: head = [1,2,3,4]
// Output: [1,4,2,3]

// Example 2:
// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

// LeetCode Link: https://leetcode.com/problems/reorder-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const reorderList = function (head) {
  if (!head || !head.next) {
    return;
  }

  // Find the middle of the list
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the list
  let prev = null;
  let curr = slow.next;
  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  slow.next = null;

  // Merge the two halves
  let first = head;
  let second = prev;
  while (second) {
    const temp1 = first.next;
    const temp2 = second.next;
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let head = null;
  let current = null;
  for (const val of arr) {
    const newNode = { val, next: null };
    if (!head) {
      head = newNode;
      current = head;
    } else {
      current.next = newNode;
      current = current.next;
    }
  }
  return head;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  const arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

// Example 1
const head1 = createLinkedList([1, 2, 3, 4]);
reorderList(head1);
console.log("Example 1:", linkedListToArray(head1)); // Output: [1, 4, 2, 3]

// Example 2
const head2 = createLinkedList([1, 2, 3, 4, 5]);
reorderList(head2);
console.log("Example 2:", linkedListToArray(head2)); // Output: [1, 5, 2, 4, 3]
