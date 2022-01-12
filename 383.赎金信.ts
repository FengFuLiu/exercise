/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 *
 * https://leetcode-cn.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (64.10%)
 * Likes:    263
 * Dislikes: 0
 * Total Accepted:    121.5K
 * Total Submissions: 188.9K
 * Testcase Example:  '"a"\n"b"'
 *
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
 *
 * 如果可以，返回 true ；否则返回 false 。
 *
 * magazine 中的每个字符只能在 ransomNote 中使用一次。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：ransomNote = "a", magazine = "b"
 * 输出：false
 *
 *
 * 示例 2：
 *
 *
 * 输入：ransomNote = "aa", magazine = "ab"
 * 输出：false
 *
 *
 * 示例 3：
 *
 *
 * 输入：ransomNote = "aa", magazine = "aab"
 * 输出：true
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= ransomNote.length, magazine.length <= 10^5
 * ransomNote 和 magazine 由小写英文字母组成
 *
 *
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  const hash = {};
  let res = false;
  [...magazine].forEach((el) => {
    hash[el] ? ++hash[el] : (hash[el] = 1);
  });
  for (let i = 0; i < ransomNote.length; i++) {
    const curr = ransomNote[i];
    if (hash[curr]) {
      --hash[curr];
    } else {
      return res;
    }
  }
  res = true;
  return res;
}
// @lc code=end
