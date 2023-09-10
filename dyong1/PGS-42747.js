function solution(citations) {
  // 5->4->3->
  const sorted = citations.sort((lhs, rhs) => rhs - lhs);
  for (let h = sorted.length; h > 0; h--) {
    if (sorted[h - 1] >= h) {
      return h;
    }
  }
  return 0;
}
