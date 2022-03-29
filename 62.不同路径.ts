/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 *
 * https://leetcode-cn.com/problems/unique-paths/description/
 *
 * algorithms
 * Medium (66.60%)
 * Likes:    1342
 * Dislikes: 0
 * Total Accepted:    403.6K
 * Total Submissions: 603.6K
 * Testcase Example:  '3\n7'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 *
 * 问总共有多少条不同的路径？
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：m = 3, n = 7
 * 输出：28
 *
 * 示例 2：
 *
 *
 * 输入：m = 3, n = 2
 * 输出：3
 * 解释：
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1. 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右
 * 3. 向下 -> 向右 -> 向下
 *
 *
 * 示例 3：
 *
 *
 * 输入：m = 7, n = 3
 * 输出：28
 *
 *
 * 示例 4：
 *
 *
 * 输入：m = 3, n = 3
 * 输出：6
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 题目数据保证答案小于等于 2 * 10^9
 *
 *
 */

// @lc code=start
/*  
  1.确定dp数组（dp table）以及下标的含义:dp[3][2]表示3行2列的宫格内有几种方式走到终点
  dp[1][1]=0;
  dp[2][1]=1;
  dp[3][1]=1;
  dp[2][2]=2;
  dp[3][2]=3;
  dp[3][3]=6;
  2.确定递推公式:dp[m][n]=dp[m-1][n]+dp[m][n-1];
  3.dp数组初始化:dp[1][1]=0;
    */
function uniquePaths(m: number, n: number): number {
  const dp = new Array(m + 1).fill(0).map((item) => new Array(n + 1).fill(0));
  dp[1][1] = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (j === 1 || i == 1) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m][n];
}

/* function factorial(n: number) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
// 机器人一定会走m+n-2步，即从m+n-2中挑出m-1步向下走不就行了吗？即C（（m+n-2），（m-1））。
function uniquePaths(m: number, n: number): number {
  const needNum = m - 1 + n - 1;
  return factorial(needNum) / (factorial(m - 1) * factorial(needNum - m + 1));
} */
// @lc code=end
