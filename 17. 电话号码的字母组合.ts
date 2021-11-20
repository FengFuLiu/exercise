// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
type Props = {
  [key: string]: string[]
}
const numberMapping: Props = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}
// 主要思路为letterCombinations方法每次只加入一个字母，递归该方法并且将每次递归的结果通过第二个参数传递出来以便在下一个递归中使用；等到没字母传入时第二个参数即为最终结果
// 新字符串加入res
const updateLetterCombinations = (str: string, arr: string[]) => {
  const combinations = [];
  if (arr.length === 0) {
    combinations.push(...numberMapping[str])
  } else {
    numberMapping[str].forEach(el => arr.forEach(item => combinations.push(item + el)));
  }
  return combinations;
}

function letterCombinations(digits: string, res: string[] = []): string[] {
  if (digits.length !== 0) {
    if (digits.length === 1) {
      res = res.length === 0 ? numberMapping[digits] : updateLetterCombinations(digits, res);
    } else {
      const str = digits.slice(0, 1);
      const otherStr = digits.slice(1);
      res = updateLetterCombinations(str, res);
      res = letterCombinations(otherStr, res);
    }
  }
  return res
};