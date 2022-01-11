/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode-cn.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (46.02%)
 * Likes:    1206
 * Dislikes: 0
 * Total Accepted:    578.9K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 
 * 请必须使用时间复杂度为 O(log n) 的算法。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [1,3,5,6], target = 5
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums = [1,3,5,6], target = 2
 * 输出: 1
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: nums = [1,3,5,6], target = 7
 * 输出: 4
 * 
 * 
 * 示例 4:
 * 
 * 
 * 输入: nums = [1,3,5,6], target = 0
 * 输出: 0
 * 
 * 
 * 示例 5:
 * 
 * 
 * 输入: nums = [1], target = 0
 * 输出: 0
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 
 * -10^4 
 * nums 为无重复元素的升序排列数组
 * -10^4 
 * 
 * 
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;
  let index = 0;
  let { 0: a, length: l, [l - 1]: b } = nums;

  if (target < a) return 0;
  if (target > b) return l;

  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2);
    const val = nums[middle];
    if (target > val) {
      left = middle + 1;
      index = left;
    } else if (target < val) {
      right = middle - 1;
      index = middle;
    } else {
      return middle
    }
  }
  return index
};
// @lc code=end

