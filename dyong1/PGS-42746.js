function solution(numbers) {
  const largeFirst = numbers.sort((lhs, rhs) => {
    return Number([rhs, lhs].join("")) - Number([lhs, rhs].join(""));
  });
  const parsed = largeFirst.join("");
  if (!parsed.startsWith("0")) {
    return parsed;
  }
  let nonZeroNumberStartingAt = -1;
  for (const [i, ch] of Array.from(parsed).entries()) {
    if (ch === "0") {
      continue;
    }
    nonZeroNumberStartingAt = i;
    break;
  }
  if (nonZeroNumberStartingAt === -1) {
    return "0";
  }
  return parsed.slice(nonZeroNumberStartingAt);
}
