/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (33.88%)
 * Likes:    3988
 * Dislikes: 0
 * Total Accepted:    706.7K
 * Total Submissions: 2.1M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^5 
 * 
 * 
 */

// @lc code=start

const isRepeatItem = (list: number[][], ele: number[]) => list.length > 0 && list.some(item => String(item.sort((a, b) => a - b)).includes(String(ele.sort((a, b) => a - b))))


function threeSum(nums: number[]): number[][] {
  const res = [];
  const ascNums = nums.sort((a, b) => a - b);
  if (nums.length < 3) return res;
  for (let i = 0; i < ascNums.length; i++) {
    const requiredSum = 0 - ascNums[i];//转为求两数之和
    let leftPointer = 0, rightPointer = ascNums.length - 1;;
    while (leftPointer < rightPointer) {
      if (leftPointer === i) {
        leftPointer++;
        continue;
      }
      if (rightPointer === i) {
        rightPointer--;
        continue;
      }
      const leftVal = ascNums[leftPointer], rightVal = ascNums[rightPointer];
      const twoNumSum = leftVal + rightVal;
      if (twoNumSum === requiredSum && !isRepeatItem(res, [leftVal, rightVal, ascNums[i]])) {
        res.push([leftVal, rightVal, ascNums[i]]);
      }
      if (twoNumSum < requiredSum) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  }
  return res;
};
// @lc code=end

