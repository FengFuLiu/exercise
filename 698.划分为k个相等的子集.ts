/*
 * @lc app=leetcode.cn id=698 lang=typescript
 *
 * [698] 划分为k个相等的子集
 *
 * https://leetcode-cn.com/problems/partition-to-k-equal-sum-subsets/description/
 *
 * algorithms
 * Medium (44.75%)
 * Likes:    440
 * Dislikes: 0
 * Total Accepted:    31.6K
 * Total Submissions: 70.6K
 * Testcase Example:  '[4,3,2,3,5,2,1]\n4'
 *
 * 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。
 * 
 * 示例 1：
 * 
 * 输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
 * 输出： True
 * 说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= k <= len(nums) <= 16
 * 0 < nums[i] < 10000
 * 
 * 
 */

// @lc code=start
/* 
@param buckets  k 个桶（数组），记录每个桶装的数字之和
*/
// https://labuladong.gitee.io/algo/4/29/106/
const backTrack = (nums: number[], index: number, buckets: number[], target: number) => {
  const val = nums[index];
  if (index === nums.length) {
    // 检查所有桶的数字之和是否都是 target
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i] != target) {
        return false;
      }
    }
    // nums 成功平分成 k 个子集
    return true;
  }
  // 遍历所有酒桶
  for (let i = 0; i < buckets.length; i++) {
    // 剪枝，桶装装满了
    if (buckets[i] + nums[index] > target) {
      continue;
    }
    buckets[i] += val;
    if (backTrack(nums, index + 1, buckets, target)) return true;
    buckets[i] -= val
  }
  return false
}

function canPartitionKSubsets(nums: number[], k: number): boolean {
  const sum = nums.reduce((a, b) => a + b, 0);
  const target = sum / k;
  if (k > nums.length || sum % k !== 0) return false;
  return backTrack(nums, 0, new Array(k).fill(0), target)
};
// @lc code=end

