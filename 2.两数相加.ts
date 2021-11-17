/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (41.01%)
 * Likes:    7067
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 2.6M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：l1 = [0], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出：[8,9,9,9,0,0,0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 每个链表中的节点数在范围 [1, 100] 内
 * 0 
 * 题目数据保证列表表示的数字不含前导零
 * 
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

/* 
详解如何每次在循环中将维护的链表向后移动
首先建一条链首值为-1的空链表res；后续往这条链表加上每次循环获得的值并且最后作为答案return出去，因为链首-1是我们自己定义的值最后并不需要，最后return的值是res.next；
接下来我们定义一个节点curr作为res的复制品，并在每次循环后将节点向后移动一位curr = curr.next；
为什么我们不直接操作res呢，直接操作res的话，是无法在每次循环中将节点向后移动的，如res=res.next会直接重写res的值；
因为链表是引用类型；修改curr的属性同时也会修改res的属性，但是直接将整个curr赋值，并不会修改到res中的内容；原先修改属性相当于在同一引用地址上作修改；整个赋值的话则相当于用新的地址覆盖了原有的地址，所以不会作用于res;
所以我们可以利用引用类型的特性修改curr的属性影响到res并且直接赋值curr = curr.next来将节点向后移动；
其他的操作基本就是按照题目要求进一位之类的；不多赘述。
*/
const isExceedTen = (sum: number) => sum >= 10;

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const res = new ListNode(-1);
  let sum = 0;
  let curr = res;
  let isCarry = false;//是否进位
  while (l1 || l2) {
    const node = new ListNode();
    if (!l1) {
      // Number(isCarry)转换为0或1
      sum = l2.val + Number(isCarry);
    } else if (!l2) {
      sum = l1.val + Number(isCarry);
    } else {
      sum = l1.val + l2.val + Number(isCarry);
    }
    if (isCarry) isCarry = !isCarry;
    if (isExceedTen(sum)) isCarry = true;
    node.val = sum % 10;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    curr.next = node;
    curr = curr.next;
  }
  if (isCarry) curr.next = new ListNode(1);
  return res.next;
};
// @lc code=end

