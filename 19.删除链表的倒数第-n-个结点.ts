/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (43.09%)
 * Likes:    1660
 * Dislikes: 0
 * Total Accepted:    567K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1], n = 1
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中结点的数目为 sz
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 * 
 * 
 * 
 * 
 * 进阶：你能尝试使用一趟扫描实现吗？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */



// 删除传入的head中值为node的节点的下一个节点
const findAndRemoveNext = (head: ListNode | null, index: number) => {
  console.log(index)
  // index<0的情况在n实质指向链表的第一位即表头的情况下发生
  if (index < 0) {
    head = head.next;
  } else {
    let currNode = head;
    let times = 0;
    while (currNode && times < index) {
      currNode = currNode.next;
      times++;
    }
    if (currNode?.next)
      currNode.next = currNode.next.next;
  }
  return head
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head.next) return null;
  let nodeListLength = 0;
  let currNode = head;
  while (currNode) {
    nodeListLength++;
    currNode = currNode.next;
  }
  return findAndRemoveNext(head, nodeListLength - n - 1)
};
// @lc code=end

