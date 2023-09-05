function solution(arr) {
  const uniqueSequence = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (uniqueSequence[uniqueSequence.length - 1] === arr[i]) {
      continue;
    }
    uniqueSequence.push(arr[i]);
  }
  return uniqueSequence;
}
