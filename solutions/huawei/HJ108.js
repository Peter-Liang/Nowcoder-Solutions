/*

求最小公倍数
https://www.nowcoder.com/practice/22948c2cad484e0291350abad86136c3

正整数A和正整数B 的最小公倍数是指 能被A和B整除的最小的正整数值，设计一个算法，求输入A和B的最小公倍数。

*/

const [x, y] = readline()
  .split(" ")
  .map(a => Number(a));

function findCommonDivisor(x, y) {
  if (x > y) return findCommonDivisor(y, x);
  if (y % x == 0) return y;

  let p1 = 2,
    p2 = 2;
  const vals = new Set([x, y]);
  while (true) {
    const v1 = p1++ * x;
    if (vals.has(v1)) return v1;
    vals.add(v1);
    const v2 = p2++ * y;
    if (vals.has(v2)) return v2;
    vals.add(v2);
  }
}

print(findCommonDivisor(x, y));
