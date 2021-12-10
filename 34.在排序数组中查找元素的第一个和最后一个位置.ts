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
// https://github.com/labuladong/fucking-algorithm/blob/master/%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4%E7%B3%BB%E5%88%97/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E8%AF%A6%E8%A7%A3.md
const binarySearchLeftBound = (nums: number[], target: number) => {
  let left: number = 0, right: number = nums.length - 1;
  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2);
    const baseVal = nums[middle];
    if (baseVal > target) {
      right = middle - 1;
    } else if (baseVal < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  if (nums[left] !== target || left < 0) left = -1;
  return left
}

const binarySearchRightBound = (nums: number[], target: number) => {
  let left: number = 0, right: number = nums.length - 1;
  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2);
    const baseVal = nums[middle];
    if (baseVal > target) {
      right = middle - 1;
    } else if (baseVal < target) {
      left = middle + 1;
    } else {
      left = middle + 1
    }
  }
  if (nums[right] !== target || right < 0) right = -1;
  return right
}

function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 1) {
    if (nums[0] === target) {
      return [0, 0]
    } else {
      return [-1, -1]
    }
  }
  const leftIndex = binarySearchLeftBound(nums, target);
  const rightIndex = binarySearchRightBound(nums, target);

  return [leftIndex, rightIndex];
};
// @lc code=end

