/*
 * @lc app=leetcode.cn id=219 lang=typescript
 *
 * [219] 存在重复元素 II
 *
 * https://leetcode-cn.com/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (42.28%)
 * Likes:    357
 * Dislikes: 0
 * Total Accepted:    123.3K
 * Total Submissions: 292.1K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的
 * 绝对值 至多为 k。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: nums = [1,2,3,1], k = 3
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: nums = [1,0,1,1], k = 1
 * 输出: true
 * 
 * 示例 3:
 * 
 * 输入: nums = [1,2,3,1,2,3], k = 2
 * 输出: false
 * 
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let leftPoint = 0, rightPoint = 1, res = false;
  if (nums.length === 1) return res;
  while (leftPoint < nums.length) {
    const baseVal = nums[leftPoint];
    const currVal = nums[rightPoint];
    if ((rightPoint - leftPoint > k) || (rightPoint > nums.length - 1)) {
      leftPoint++;
      rightPoint = leftPoint + 1;
      continue;
    }
    if (baseVal !== currVal) {
      rightPoint++;
    } else {
      res = true;
      break;
    }
  }
  return res
};
// @lc code=end

