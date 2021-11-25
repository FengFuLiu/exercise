/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (78.36%)
 * Likes:    1653
 * Dislikes: 0
 * Total Accepted:    457.1K
 * Total Submissions: 583.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1]
 * 输出：[[1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10 
 * nums 中的所有整数 互不相同
 * 
 * 
 */

// @lc code=start
// https://zhuanlan.zhihu.com/p/93530380
function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const backtrack = (arr: number[], list: number[]) => {
    if (arr.length === nums.length) {
      res.push(JSON.parse(JSON.stringify(arr)));
      return;
    }
    for (let i = 0; i < list.length; i++) {
      if (arr.includes(list[i])) continue;
      arr.push(list[i]);
      backtrack(arr, list);
      arr.pop();
    }
  }
  backtrack([], nums)
  return res
};
// @lc code=end

