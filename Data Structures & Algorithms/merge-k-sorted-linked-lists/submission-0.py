# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:    
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        head, tail = None, None
        while lists:
            min_index = 0
            for index in range(1, len(lists)):
                if lists[index].val < lists[min_index].val:
                    min_index = index

            if not head:
                head = lists[min_index]
                tail = lists[min_index]
            else:
                tail.next = lists[min_index]
                tail = tail.next
            
            if lists[min_index].next:
                lists[min_index] = lists[min_index].next
            else:
                lists.pop(min_index)
        return head
