/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode-cn.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (42.93%)
 * Likes:    1486
 * Dislikes: 0
 * Total Accepted:    208.4K
 * Total Submissions: 484.9K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""
 * 。
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 和 t 由英文字母组成
 * 
 * 
 * 
 * 进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
 */

// @lc code=start

const checkValid = (s: string, t: string): [boolean, number] => {
  let requireNum = 0;
  if (s.length < t.length) return [false, t.length - s.length];
  return [
    [...t].every((item) => {
      const index = s.indexOf(item);
      if (index !== -1) {
        const temp = [...s];
        temp.splice(index, 1);
        s = temp.join('');
        return true;
      } else {
        requireNum++;
        return false;
      }
    }),
    requireNum,
  ];
};
function minWindow(s: string, t: string): string {
  let res = s + t, leftPoint = 0, rightPoint = 1;
  while (rightPoint <= s.length) {
    const val = s.slice(leftPoint, rightPoint);
    const [isValid, requireNum] = checkValid(val, t);
    console.log([isValid, requireNum])
    if (isValid) {
      leftPoint++;
      if (val.length < res.length) {
        res = val;
      }
    } else {
      rightPoint = rightPoint + requireNum;

    }
  }
  return res === s + t ? '' : res;
};
// @lc code=end

