function solution(prices) {
  const results = [];
  for (let i = 0; i < prices.length; i++) {
    let timeSpent = 0;
    for (let j = i + 1; j < prices.length; j++) {
      timeSpent++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
    results.push(timeSpent);
  }
  return results;
}
