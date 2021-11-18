/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 *
 * https://leetcode-cn.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (62.46%)
 * Likes:    2945
 * Dislikes: 0
 * Total Accepted:    569.7K
 * Total Submissions: 912.3K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为
 * (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * 说明：你不能倾斜容器。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49 
 * 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 * 
 * 示例 2：
 * 
 * 
 * 输入：height = [1,1]
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：height = [4,3,2,1,4]
 * 输出：16
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：height = [1,2,1]
 * 输出：2
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == height.length
 * 2 <= n <= 10^5
 * 0 <= height[i] <= 10^4
 * 
 * 
 */

// @lc code=start
/*  
暴力解法优化版：
剪枝条件解析：if (height[i] * (height.length - (i + 1)) > area)
我们把结果近似看作一个长方形，height[i]即为本次循环的长方形高，水平坐标的区间为长方形底；
所以是否进入第二轮循环的条件就是这次循环的高*底起码要大于之前通过area变量存储的最大面积；
但是在这次循环中我们不知道底的坐标在哪，底多大是我们不知道的，那我们就给他能给的最大的底；最大的底的长度就是height.length - (i + 1) */
function maxArea(height: number[]): number {
  const getArea = (start: number, end: number) => Math.min(height[start], height[end]) * (end - start);
  let area = 0;
  for (let i = 0; i < height.length; i++) {
    // 核心剪枝条件
    if (height[i] * (height.length - (i + 1)) > area) {
      for (let j = i + 1; j < height.length; j++) {
        area = Math.max(area, getArea(i, j));
      }
    }
  }
  return area
};
// 对撞双指针，思路看官方题解
/* function maxArea(height: number[]): number {
  const getArea = (start: number, end: number) => Math.min(height[start], height[end]) * (end - start);
  let area = 0, leftPointer = 0, rightPointer = height.length - 1;
  while (leftPointer < rightPointer) {
    const leftVal = height[leftPointer];
    const rightVal = height[rightPointer];
    area = Math.max(area, getArea(leftPointer, rightPointer))
    if (leftVal <= rightVal) {
      leftPointer++
    } else {
      rightPointer--
    }
  }
  return area
}; */
// @lc code=end

