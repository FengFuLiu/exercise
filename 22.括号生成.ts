/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.27%)
 * Likes:    2161
 * Dislikes: 0
 * Total Accepted:    378.4K
 * Total Submissions: 489.7K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 有效括号组合需满足：左括号必须以正确的顺序闭合。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：["()"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 8
 * 
 * 
 */

// @lc code=start
// https://leetcode-cn.com/problems/generate-parentheses/solution/sui-ran-bu-shi-zui-xiu-de-dan-zhi-shao-n-0yt3/
function generateParenthesis(n: number): string[] {
  const res: string[] = []
  const dfs = (selectedStr: string, leftBrackets: number, rightBrackets: number) => {
    if (leftBrackets > n || rightBrackets > n || rightBrackets > leftBrackets) return;
    if (selectedStr.length === 2 * n) {
      res.push(selectedStr);
      return;
    }
    dfs(selectedStr + '(', leftBrackets + 1, rightBrackets);
    dfs(selectedStr + ')', leftBrackets, rightBrackets + 1);

  }
  dfs('', 0, 0);
  return res
};
// @lc code=end

