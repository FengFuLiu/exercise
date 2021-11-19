/*
 * @lc app=leetcode.cn id=718 lang=typescript
 *
 * [718] 最长重复子数组
 *
 * https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/description/
 *
 * algorithms
 * Medium (56.47%)
 * Likes:    568
 * Dislikes: 0
 * Total Accepted:    89K
 * Total Submissions: 157.5K
 * Testcase Example:  '[1,2,3,2,1]\n[3,2,1,4,7]'
 *
 * 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：
 * A: [1,2,3,2,1]
 * B: [3,2,1,4,7]
 * 输出：3
 * 解释：
 * 长度最长的公共子数组是 [3, 2, 1] 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= len(A), len(B) <= 1000
 * 0 <= A[i], B[i] < 100
 * 
 * 
 */

// @lc code=start
// 暴力解法 37/52用例内存溢出
function findLength(nums1: number[], nums2: number[]): number {
  let res = [];
  const list: number[][] = [];
  const shortestArr = (nums1.length > nums2.length ? nums2 : nums1);
  for (let sliceLength = 1; sliceLength <= shortestArr.length; sliceLength++) {
    for (let i = 0; i < shortestArr.length - sliceLength + 1; i++) {
      list.push(shortestArr.slice(i, i + sliceLength))
    }
  }
  for (let i = 0; i < list.length; i++) {
    if ([(nums1), (nums2)].every(item => item.find((_, index, arr) => arr.slice(index, index + list[i].length).toString() === list[i].toString()) !== undefined && list[i].length > res.length)) {
      res = list[i];
    }
  }
  return res.length
};
// @lc code=end

