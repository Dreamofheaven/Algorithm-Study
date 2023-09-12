function solution(digits) {
  // small space of time (length of digits is from 1 to 7)
  // permute numbers <- backtrack (visit all)
  // for each number, check if it is a prime
  const resultRef = { total: 0 };
  permuteAndCount({ remaining: Array.from(digits), holding: [], resultRef });
  return resultRef.total;
}
function permuteAndCount({ remaining, holding, resultRef }) {
  // console.log({remaining, holding, resultRef})
  if (remaining.length === 0) {
    return;
  }

  for (let i = 0; i < remaining.length; i++) {
    const current = remaining[i];
    if (holding.length > 0 || (holding.length === 0 && current !== "0")) {
      holding.push(current);
      const parsed = Number(holding.join(""));
      if (isPrime(parsed)) {
        if (_counted[parsed] == null) {
          _counted[parsed] = true;
          resultRef.total++;
        }
      }
    }
    remaining.splice(i, 1);

    permuteAndCount({ remaining, holding, resultRef });

    remaining.splice(i, 0, current);
    holding.pop();
  }
}
const _counted = {};
function isPrime(num) {
  if (_primeMemo[num] != null) {
    return _primeMemo[num];
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      _primeMemo[num] = false;
      return _primeMemo[num];
    }
  }

  _primeMemo[num] = true;
  return _primeMemo[num];
}
const _primeMemo = {
  0: false,
  1: false,
  2: true,
  3: true,
  5: true,
  7: true,
};
