/*
 * @lc app=leetcode.cn id=131 lang=typescript
 *
 * [131] 分割回文串
 *
 * https://leetcode-cn.com/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (72.31%)
 * Likes:    901
 * Dislikes: 0
 * Total Accepted:    143.3K
 * Total Submissions: 198.3K
 * Testcase Example:  '"aab"'
 *
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 * 
 * 回文串 是正着读和反着读都一样的字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "aab"
 * 输出：[["a","a","b"],["aa","b"]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a"
 * 输出：[["a"]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由小写英文字母组成
 * 
 * 
 */

// @lc code=start
// https://programmercarl.com/0131.%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2.html#%E5%9B%9E%E6%BA%AF%E4%B8%89%E9%83%A8%E6%9B%B2
const isPalindrome = (str: string) => String([...str].reverse()) === String([...str]);

function partition(s: string): string[][] {
  const res: string[][] = [];
  const curr: string[] = [];

  const backtracking = (index: number) => {
    // i代表从头开始字符串长度为i的字符或理解成从i处切一刀
    for (let i = index; i < s.length + 1; i++) {
      const val = s.slice(index, i + 1);
      if (index === s.length && curr.every(isPalindrome)) {
        res.push([...curr]);
        return;
      }
      curr.push(val);
      backtracking(i + 1);
      curr.pop();
    }
  }

  backtracking(0)
  return res;
};
// @lc code=end

