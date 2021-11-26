/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 *
 * https://leetcode-cn.com/problems/combination-sum-iii/description/
 *
 * algorithms
 * Medium (73.62%)
 * Likes:    391
 * Dislikes: 0
 * Total Accepted:    108.5K
 * Total Submissions: 147.3K
 * Testcase Example:  '3\n7'
 *
 * 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 * 
 * 说明：
 * 
 * 
 * 所有数字都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: k = 3, n = 7
 * 输出: [[1,2,4]]
 * 
 * 
 * 示例 2:
 * 
 * 输入: k = 3, n = 9
 * 输出: [[1,2,6], [1,3,5], [2,3,4]]
 * 
 * 
 */

// @lc code=start
function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = [];
  const curr: number[] = [];

  const backtracking = (index: number) => {
    const sum = curr.reduce((a, b) => a + b, 0);
    for (let i = index; i <= 10; i++) {
      if (curr.length > k || sum > n) return;

      if (curr.length === k && sum === n) {
        res.push([...curr]);
        return;
      }
      curr.push(i);
      backtracking(i + 1);
      curr.pop();
    }
  }
  backtracking(1)
  return res;
};
// @lc code=end

