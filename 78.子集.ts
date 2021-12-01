/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (80.19%)
 * Likes:    1401
 * Dislikes: 0
 * Total Accepted:    336.4K
 * Total Submissions: 419.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
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
 * nums 中的所有元素 互不相同
 * 
 * 
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const res: number[][] = [[]];
  const curr: number[] = [];

  const backtracking = (index: number, len: number) => {
    if (curr.length === len) {
      res.push([...curr]);
      return
    }
    for (let i = index; i < nums.length; i++) {
      const val = nums[i];
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

