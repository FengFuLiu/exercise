/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (42.28%)
 * Likes:    1325
 * Dislikes: 0
 * Total Accepted:    384.9K
 * Total Submissions: 910.4K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 
 * 进阶：
 * 
 * 
 * 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^9 
 * nums 是一个非递减数组
 * -10^9 
 * 
 * 
 */

// @lc code=start

const getLeftIndex = (nums: number[], target: number) => {
  let left: number = 0, right: number = nums.length - 1, res = -1;
  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2);
    const baseVal = nums[middle];
    if (target <= baseVal) {
      right = middle - 1;
      res = right;
    } else {
      left = middle + 1;
    }
  }
  return res
}

const getRightIndex = (nums: number[], target: number) => {
  let left: number = 0, right: number = nums.length - 1, res = -1;
  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2);
    const baseVal = nums[middle];
    if (target < baseVal) {
      right = middle - 1;
    } else {
      res = left;
      left = middle + 1;
    }
  }
  return res
}

function searchRange(nums: number[], target: number): number[] {
  const res: number[] = [-1, -1];
  res[0] = getLeftIndex(nums, target);
  res[1] = getRightIndex(nums, target);
  return res;
};
// @lc code=end

