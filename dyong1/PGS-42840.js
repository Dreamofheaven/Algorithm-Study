function solution(answers) {
  const supo1 = {
    pattern: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
    score: 0,
    id: 1,
  };
  const supo2 = {
    pattern: [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5],
    score: 0,
    id: 2,
  };
  const supo3 = {
    pattern: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    score: 0,
    id: 3,
  };
  for (let i = 0; i < answers.length; i++) {
    if (supo1.pattern[i % supo1.pattern.length] === answers[i]) {
      supo1.score++;
    }
    if (supo2.pattern[i % supo2.pattern.length] === answers[i]) {
      supo2.score++;
    }
    if (supo3.pattern[i % supo3.pattern.length] === answers[i]) {
      supo3.score++;
    }
  }
  const maxScore = Math.max(supo1.score, supo2.score, supo3.score);
  return [supo1, supo2, supo3]
    .filter((s) => s.score === maxScore)
    .map((s) => s.id)
    .sort((lhs, rhs) => lhs - rhs);
}
