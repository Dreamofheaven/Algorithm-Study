function solution(s) {
  if (s.length === 1) {
    return false;
  }
  if (s.length % 2 === 1) {
    return false;
  }
  if (s[0] === ")") {
    return false;
  }

  const stack = [];
  for (const ch of s) {
    if (stack.length === 0 && ch === ")") {
      return false;
    }
    if (ch === "(" && stack[stack.length - 1] === ")") {
      stack.pop();
      continue;
    }
    if (ch === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
      continue;
    }
    stack.push(ch);
  }
  return stack.length === 0;
}
