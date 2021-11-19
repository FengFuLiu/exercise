/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (41.21%)
 * Likes:    1869
 * Dislikes: 0
 * Total Accepted:    661.8K
 * Total Submissions: 1.6M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] 仅由小写英文字母组成
 * 
 * 
 */
// 直观的解法以及优化版
// 首先题目要求的是公共前缀，不是公共子串。即一定为以第一个数开头的连续字符；
// 公共子串的题目是 718.最长重复子数组.ts；
// 详细思路见注释
// @lc code=start
// 枚举法
/* function longestCommonPrefix(strs: string[]): string {
  let res = '';
  const shortestStr = strs.sort((a, b) => a.length - b.length)[0];//排序出最短的字符来遍历
  // 该循环指一共有shortestStr.length种方式把字符串切成不同的块数；sliceLength表示该次中公共前缀的长度
  for (let sliceLength = 1; sliceLength < shortestStr.length + 1; sliceLength++) {
    const sliceStr = shortestStr.substr(0, sliceLength);
    if (strs.every(item => item.substr(0, sliceLength) === sliceStr)) {
      res = sliceStr
    }
  }
  return res
}; */
// 枚举优化版：循环从公共前缀从长度最长情况开始递减，这样只要遇到一次符合条件的即可return出去；因为接下来的长度必定越来越短
function longestCommonPrefix(strs: string[]): string {
  let res = '';
  const shortestStr = strs.sort((a, b) => a.length - b.length)[0];
  // 该循环指一共有shortestStr.length种方式把字符串切成不同的块数；sliceLength表示该次中公共前缀的长度
  for (let sliceLength = shortestStr.length; sliceLength > 0; sliceLength--) {
    const sliceStr = shortestStr.substr(0, sliceLength);
    if (strs.every(item => item.substr(0, sliceLength) === sliceStr)) {
      res = sliceStr;
      break;
    }
  }
  return res
};
// 横向比较法：思路见官解
/* function longestCommonPrefix(strs: string[]): string {
  let res = strs[0];
  const getCommonPrefix = (str1: string, str2: string) => {
    let end = 0;
    const shortestStr = str1.length > str2.length ? str2 : str1
    while (end < shortestStr.length && str1[end] === str2[end]) {
      end++
    }
    return shortestStr.substring(0, end)
  }
  if (strs.length === 1) res = strs[0];
  for (let i = 1; i < strs.length; i++) {
    res = getCommonPrefix(res, strs[i]);
    if (res.length === 0) break;
  }
  return res
}; */




// 求成最长公共子串了==
/* function longestCommonPrefix(strs: string[]): string {
  let res = '';
  const list: string[] = [];
  strs = strs.sort((a, b) => a.length - b.length);
  const shortestStr = strs[0];
  for (let sliceLength = 1; sliceLength <= shortestStr.length; sliceLength++) {
    for (let i = 0; i < shortestStr.length - sliceLength + 1; i++) {
      list.push(shortestStr.substr(i, sliceLength))
    }
  }
  console.log(list)
  for (let i = 0; i < list.length; i++) {
    if (strs.every(item => item.includes(list[i]) && list[i].length > res.length)) {
      res = list[i]
    }
  }
  return res
}; */
// @lc code=end

