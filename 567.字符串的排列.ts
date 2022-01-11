/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 *
 * https://leetcode-cn.com/problems/permutation-in-string/description/
 *
 * algorithms
 * Medium (43.36%)
 * Likes:    516
 * Dislikes: 0
 * Total Accepted:    138.8K
 * Total Submissions: 320K
 * Testcase Example:  '"ab"\n"eidbaooo"'
 *
 * 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
 * 
 * 换句话说，s1 的排列之一是 s2 的 子串 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s1 = "ab" s2 = "eidbaooo"
 * 输出：true
 * 解释：s2 包含 s1 的排列之一 ("ba").
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s1= "ab" s2 = "eidboaooab"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s1.length, s2.length <= 10^4
 * s1 和 s2 仅包含小写字母
 * 
 * 
 */
// 耗时较久，有个对比字母的逻辑可以优化，优化参考下面
// https://leetcode-cn.com/problems/permutation-in-string/solution/zi-fu-chuan-de-pai-lie-by-leetcode-solut-7k7u/
// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  let leftPoint = 0, rightPoint = 1, res = false, sortS1 = String([...s1].sort());
  if (s1.length === 1 || s2.length == 1) return s2.includes(s1);
  if (s2.length < s1.length) return res;
  while (leftPoint < rightPoint && rightPoint <= s2.length) {
    const currBlockStr = s2.slice(leftPoint, rightPoint + 1);
    if (currBlockStr.length < s1.length) {
      rightPoint++;
    } else {
      const isIncludesS2 = String([...currBlockStr].sort()) === sortS1;
      if (isIncludesS2) {
        res = true;
        break
      } else {
        rightPoint++;
        leftPoint++;
      }
    }
  }
  return res;
};
// @lc code=end

