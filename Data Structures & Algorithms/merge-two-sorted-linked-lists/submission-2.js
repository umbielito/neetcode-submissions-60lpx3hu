/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(null)
        let newList = dummy;

        while (list1 && list2) {
            if(list1.val < list2.val) {
                newList.next = list1;
                newList = newList.next;
                list1 = list1.next;
            } else {
                newList.next = list2;
                newList = newList.next;
                list2 = list2.next;
            }
        }

        let rest = list1 ?? list2;
        newList.next = rest;

        return dummy.next;
    }
}
