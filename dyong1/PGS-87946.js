function solution(k, dungeons) {
  const maxRef = { max: 0 };
  maxVisits({ visited: [], dungeons, remainingPoint: k, maxRef });
  return maxRef.max;
}
function maxVisits({ visited, dungeons, remainingPoint, maxRef }) {
  if (dungeons.every((d) => remainingPoint < d[0])) {
    maxRef.max = Math.max(visited.length, maxRef.max);
    return;
  }

  for (let i = 0; i < dungeons.length; i++) {
    if (remainingPoint < dungeons[i][0]) {
      continue;
    }

    const d = dungeons[i];
    visited.push(d);
    dungeons.splice(i, 1);
    maxVisits({ visited, dungeons, remainingPoint: remainingPoint - d[1], maxRef });
    visited.pop();
    dungeons.splice(i, 0, d);
  }
}
