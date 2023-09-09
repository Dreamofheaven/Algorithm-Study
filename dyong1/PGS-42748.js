function solution(array, commands) {
  const answers = [];
  for (const [beginPlusOne, end, nthPlusOne] of commands) {
    answers.push(
      array
        .slice(beginPlusOne - 1, end)
        .map(Number)
        .sort((lhs, rhs) => lhs - rhs)[nthPlusOne - 1]
    );
  }
  return answers;
}
