/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 *
 * https://leetcode-cn.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (43.44%)
 * Likes:    1744
 * Dislikes: 0
 * Total Accepted:    450.9K
 * Total Submissions: 1M
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
 *
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 *
 * 判断你是否能够到达最后一个下标。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [2,3,1,1,4]
 * 输出：true
 * 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [3,2,1,0,4]
 * 输出：false
 * 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 *
 *
 */

// @lc code=start
/* 
局部最优推到全局最优
局部最优：每次在当前可以跳的范围内选能跳最远的
*/
function canJump(nums: number[]): boolean {
  let currNum = nums[0];
  let currNumIndex = 0;
  const { length } = nums;

  while (currNumIndex < length - 1 && currNum > 0) {
    const end = currNumIndex + currNum;

    if (end >= length - 1) return true;

    const tempArr = nums.slice(currNumIndex + 1, end + 1);
    let distance = -Infinity;
    let index = 0;

    for (let i = 0; i < tempArr.length; i++) {
      const currDistance = i + tempArr[i];
      if (currDistance > distance) {
        distance = currDistance;
        currNum = tempArr[i];
        index = i + 1;
      }
    }
    currNumIndex = currNumIndex + index;
  }
  return currNumIndex >= length - 1;
}
// @lc code=end
