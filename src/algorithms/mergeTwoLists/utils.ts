import { ListNode } from "./main.ts";

// Helper function to create a linked list from an array
export function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const dummy = new ListNode();
  let current = dummy;
  for (const num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert a linked list to an array
export function linkedListToArray(list: ListNode | null): number[] {
  const result: number[] = [];
  while (list) {
    result.push(list.val);
    list = list.next;
  }
  return result;
}
