/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (35.14%)
 * Likes:    3242
 * Dislikes: 0
 * Total Accepted:    884.5K
 * Total Submissions: 2.5M
 * Testcase Example:  '123'
 *
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：x = 123
 * 输出：321
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：x = -123
 * 输出：-321
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：x = 120
 * 输出：21
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：x = 0
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -2^31 
 * 
 * 
 */

// @lc code=start
/* 
两种思路：最直接的思路和巧用数学的思路
第一种就是把数字=》字符串=》数组=》.reverse()之后再转回来；
第二种则比较玄妙，我们新建一个数组，建立一个以x长度为次数的循环；每次按顺序把x的最后一位push到数组中，最后数组中存在的值转为number后即为所需要的整数；
难点：
区分正负值：我们只需要一开始判断x>=0；事先把符号确定；后续直接用绝对值去算即可；
如何每次把x的最后一位取出：运用数学除以10取余数的方式巧妙的获取x最后一位，如123%10=3;同时记得将x也去掉一位数以便进行下一次循环
*/
const maxNum = Math.pow(2, 31) - 1;
const minNum = -1 * Math.pow(2, 31) - 1;

// function reverse(x: number): number {
//   let res = 0;
//   if (x >= 0) {
//     res = Number(([...String(x)].reverse()).join(''));
//   } else {
//     res = -1 * Number(([...String(Math.abs(x))].reverse()).join(''));
//   }
//   if (res > maxNum) res = 0;
//   if (res < minNum) res = 0;
//   return res;
// };

function reverse(x: number): number {
  let val = [];
  const numSymbol = x >= 0 ? 1 : -1;
  let absNum = Math.abs(x);
  while (absNum) {
    val.push(absNum % 10);
    absNum = Math.floor(absNum / 10);
  }
  let res = numSymbol * Number(val.join(''));
  if (res > maxNum) res = 0;
  if (res < minNum) res = 0;
  return res;
};
// @lc code=end

