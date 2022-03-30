/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 *
 * https://leetcode-cn.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (39.61%)
 * Likes:    757
 * Dislikes: 0
 * Total Accepted:    236K
 * Total Submissions: 590.5K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。
 *
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 *
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
 * 输出：2
 * 解释：3x3 网格的正中间有一个障碍物。
 * 从左上角到右下角一共有 2 条不同的路径：
 * 1. 向右 -> 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右 -> 向右
 *
 *
 * 示例 2：
 *
 *
 * 输入：obstacleGrid = [[0,1],[0,0]]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == obstacleGrid.length
 * n == obstacleGrid[i].length
 * 1 <= m, n <= 100
 * obstacleGrid[i][j] 为 0 或 1
 *
 *
 */

// @lc code=start
/* 
dp[i][j]:到达obstacleGrid[i][j]点有几条路径
递推公式：
当obstacleGrid[i][j]=1时：dp[i][j]=0并且continue;
当i=0,j=0时：dp[i][j] = Number(obstacleGrid[i][j] === 0);
当i=0,j>0时：dp[i][j] = Number(dp[i][j - 1] && obstacleGrid[i][j] === 0);
当i>0,j=0时：dp[i][j] = Number(dp[i - 1][j] && obstacleGrid[i][j] === 0);
当i>0,j>0时：dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
 */
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const { length: mLength } = obstacleGrid;
  const nLength = obstacleGrid[0].length;
  const dp = Array(mLength)
    .fill(0)
    .map((item) => Array(nLength).fill(0));

  for (let i = 0; i < mLength; i++) {
    for (let j = 0; j < nLength; j++) {
      const currVal = obstacleGrid[i][j];

      if (currVal === 1) {
        dp[i][j] = 0;
        continue;
      }

      if (i === 0 && j === 0) {
        dp[i][j] = Number(currVal === 0);
      }

      if ((i === 0 && j > 0) || (j === 0 && i > 0)) {
        if (i === 0) {
          dp[i][j] = Number(dp[i][j - 1] && currVal === 0);
        } else {
          dp[i][j] = Number(dp[i - 1][j] && currVal === 0);
        }
      }

      if (i > 0 && j > 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  console.log(dp);
  return dp[mLength - 1][nLength - 1];
}
// @lc code=end
