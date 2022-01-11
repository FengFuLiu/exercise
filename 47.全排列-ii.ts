/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (64.00%)
 * Likes:    880
 * Dislikes: 0
 * Total Accepted:    236.5K
 * Total Submissions: 369.4K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,1,2]
 * 输出：
 * [[1,1,2],
 * ⁠[1,2,1],
 * ⁠[2,1,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10 
 * 
 * 
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];
  const curr: number[] = [];
  nums = nums.sort();//排序以便去重

  const backtracking = (arr: number[]) => {
    if (curr.length === nums.length) {
      res.push([...curr]);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      const val = arr[i];
      if (i && (val === arr[i - 1])) continue;//去重
      curr.push(val);
      backtracking([...(arr.filter((_item, index) => index !== i))]);
      curr.pop();
    }
  };

  backtracking([...nums]);
  return res;
};
// @lc code=end

