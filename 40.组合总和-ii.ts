/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 *
 * https://leetcode-cn.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (61.79%)
 * Likes:    743
 * Dislikes: 0
 * Total Accepted:    216.1K
 * Total Submissions: 349.7K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的每个数字在每个组合中只能使用一次。
 * 
 * 注意：解集不能包含重复的组合。 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 输出:
 * [
 * [1,1,6],
 * [1,2,5],
 * [1,7],
 * [2,6]
 * ]
 * 
 * 示例 2:
 * 
 * 
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 输出:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 
 * 1 
 * 1 
 * 
 * 
 */

// @lc code=start
// https://leetcode-cn.com/problems/combination-sum-ii/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-hui-s-ig29/
function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const curr: number[] = [];
  candidates = candidates.sort((a, b) => a - b);

  const backtracking = (res: number[][], curr: number[], index: number) => {
    const currSum = curr.reduce((a, b) => a + b, 0);
    if (currSum > target) return;
    if (currSum === target) {
      // 浅拷贝
      res.push([...curr]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      const val = candidates[i];
      if (val > target) continue;
      /* 去重
        i > index解释：
        首先我们要知道candidates这个数组是固定的，其次candidates[i]==candidate[i-1]这个条件控制的是仅仅是前后元素是否相等，
        但是单纯用这一条件的话会导致同一跟树枝（纵向）出现相同元素也会被剪掉，就是连[1, 1, 6]这种答案都不可以出现。
        但是一旦加了 i > startIndex 这个条件就不一样了，因为如果在同一根树枝上进行迭代你会发现 i一直是等于 startIndex 的，只有横向的时候才会出现 i > startIndex的情况，
        所以 i > startIndex && candidates[i]==candidate[i-1]可以进行树层去重 */
      if (i > index && val === candidates[i - 1]) continue;

      curr.push(val);
      // i+1 去重
      backtracking(res, curr, i + 1);
      curr.pop();
    }
  };
  backtracking(res, curr, 0);
  return res;
};
// @lc code=end

