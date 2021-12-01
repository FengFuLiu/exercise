/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 *
 * https://leetcode-cn.com/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (63.37%)
 * Likes:    696
 * Dislikes: 0
 * Total Accepted:    149.1K
 * Total Submissions: 235.3K
 * Testcase Example:  '[1,2,2]'
 *
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
 * 
 * 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,2]
 * 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[[],[0]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10 
 * 
 * 
 * 
 * 
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = [[]];
  const curr: number[] = [];
  nums = nums.sort();
  const backtracking = (index: number, len: number) => {
    if (curr.length === len) {
      res.push([...curr]);
      return
    }
    for (let i = index; i < nums.length; i++) {
      const val = nums[i];
      // https://github.com/aaaaahua/exercise/blob/main/40.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C-ii.ts
      if (i > index && val === nums[i - 1]) continue;
      curr.push(val);
      backtracking(i + 1, len);
      curr.pop();
    }
  }
  // 求从1到nums.length长度的子集
  for (let i = 1; i < nums.length + 1; i++) {
    backtracking(0, i);
  }
  return res;
};
// @lc code=end

