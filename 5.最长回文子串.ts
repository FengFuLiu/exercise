/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (35.72%)
 * Likes:    4338
 * Dislikes: 0
 * Total Accepted:    786.6K
 * Total Submissions: 2.2M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "a"
 * 输出："a"
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "ac"
 * 输出："a"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由数字和英文字母（大写和/或小写）组成
 * 
 * 
 */

// @lc code=start
const isPalindrome = (str: string) => String([...str].reverse()) === String([...str]);

function longestPalindrome(s: string): string {
  const { length } = s;
  if (length < 2) return s;
  // 创建初始值：
  // 创建每项为布尔值的二维数组
  // dp[i][j]表示在s的区间为i到j的字符串是否为回文串
  // i===j时相当于为单个字符，必是回文串
  const dp = new Array(length);
  for (let i = 0; i < length; i++) {
    dp[i] = new Array(length).fill(false).map((_item, index) => Boolean(index === i))
  };
  // todo

};
/*  暴力枚举，超出时间限制
function longestPalindrome(s: string): string {
  let str = '';
  if (s.length === 1) str = s;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const tempStr = s.slice(i, j + 1);
      if (isPalindrome(tempStr)) {
        if (tempStr.length > str.length) str = tempStr;
      }
    }
  }
  return str;
}; */
// @lc code=end

