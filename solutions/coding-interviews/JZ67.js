/*
剪绳子
https://www.nowcoder.com/practice/57d85990ba5b440ab888fc72b0751bf8?page=0

题目描述
给你一根长度为n的绳子，请把绳子剪成整数长的m段（m、n都是整数，n>1并且m>1，m<=n），每段绳子的长度记为k[1],...,k[m]。请问k[1]x...xk[m]可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
*/

const cache = [];
function cutRope(number) {
  if (number <= 3) return number;

  if (cache[number]) return cache[number];
  let ans = 0;
  for (let i = 2; i < number - 1; i++) {
    const sum = i * cutRope(number - i);
    ans = Math.max(sum, ans);
  }

  cache[number] = ans;
  return ans;
}

function print(num, expected) {
  const result = cutRope(num);
  console.log("---------> : print -> result", result, result == expected);
}

print(8, 18);
print(15, 243);
print(17, 486);
