function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  let studentsWearing = 0;
  for (let i = 1; i <= n; i++) {
    if (!lost.includes(i)) {
      studentsWearing++;
      continue;
    }
    if (!lost.includes(i - 1) && reserve.includes(i - 1)) {
      reserve = reserve.filter((r) => r !== i - 1);
      studentsWearing++;
      continue;
    }
    if (!lost.includes(i + 1) && reserve.includes(i + 1)) {
      reserve = reserve.filter((r) => r !== i + 1);
      studentsWearing++;
      continue;
    }
    if (reserve.includes(i)) {
      reserve = reserve.filter((r) => r !== i);
      studentsWearing++;
      continue;
    }
  }
  return studentsWearing;
}
