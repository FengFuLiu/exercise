/*
 * @lc app=leetcode.cn id=45 lang=typescript
 *
 * [45] 跳跃游戏 II
 *
 * https://leetcode-cn.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Medium (43.66%)
 * Likes:    1521
 * Dislikes: 0
 * Total Accepted:    299.1K
 * Total Submissions: 676.2K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给你一个非负整数数组 nums ，你最初位于数组的第一个位置。
 *
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 *
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 *
 * 假设你总是可以到达数组的最后一个位置。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。
 * 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [2,3,0,1,4]
 * 输出: 2
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1
 * 0
 *
 *
 */

// @lc code=start
function jump(nums: number[]): number {
  let currNum = nums[0];
  let currNumIndex = 0;
  let times = 0;
  const { length } = nums;

  while (currNumIndex < length - 1 && currNum > 0) {
    const end = currNumIndex + currNum;

    if (end >= length - 1) return ++times;

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
    times++;
    currNumIndex = currNumIndex + index;
  }
  return times;
}
// @lc code=end
