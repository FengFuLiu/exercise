/*
 * @lc app=leetcode.cn id=491 lang=typescript
 *
 * [491] 递增子序列
 *
 * https://leetcode-cn.com/problems/increasing-subsequences/description/
 *
 * algorithms
 * Medium (54.31%)
 * Likes:    371
 * Dislikes: 0
 * Total Accepted:    51.2K
 * Total Submissions: 94.4K
 * Testcase Example:  '[4,6,7,7]'
 *
 * 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。
 * 
 * 数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [4,6,7,7]
 * 输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [4,4,3,2,1]
 * 输出：[[4,4]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 15
 * -100 <= nums[i] <= 100
 * 
 * 
 */

// @lc code=start
function findSubsequences(nums: number[]): number[][] {
  const res: number[][] = [];
  const curr: number[] = [];
  const set = new Set();


  const backtracking = (index: number, len: number) => {
    if (curr.length === len) {
      const currStr = String(curr);
      if (!set.has(currStr)) {
        set.add(currStr);
        res.push([...curr]);
      }
      return;
    }
    for (let i = index; i < nums.length; i++) {
      const val = nums[i];
      if (curr[curr.length - 1] > val) continue;
      if (i > index && val === nums[i - 1]) continue;
      curr.push(val);
      backtracking(i + 1, len);
      curr.pop()
    }
  }

  for (let i = 2; i < nums.length + 1; i++) {
    backtracking(0, i)
  }

  return res;
};
// @lc code=end

