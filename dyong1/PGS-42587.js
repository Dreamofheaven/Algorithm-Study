function solution(priorities, location) {
  const scheduled = {};
  let maxPriorityAt = -1;
  for (let i = 0; i < priorities.length; i++) {
    maxPriorityAt = nextMaxPriorityAt({ priorities, scheduled, lastAt: maxPriorityAt });
    scheduled[maxPriorityAt] = true;
    if (maxPriorityAt === location) {
      return i + 1;
    }
  }
}
function nextMaxPriorityAt({ priorities, scheduled, lastAt }) {
  let begin = null;
  const nextOfLastAt = (lastAt + 1) % priorities.length;
  for (let i = nextOfLastAt; i < priorities.length; i++) {
    if (scheduled[i] != null) {
      continue;
    }
    begin = i;
    break;
  }
  if (begin == null) {
    for (let i = 0; i < nextOfLastAt; i++) {
      if (scheduled[i] != null) {
        continue;
      }
      begin = i;
      break;
    }
  }

  let maxPriorityAt = begin;
  for (let i = begin; i < priorities.length; i++) {
    if (scheduled[i] != null) {
      continue;
    }
    if (priorities[i] > priorities[maxPriorityAt]) {
      maxPriorityAt = i;
    }
  }
  for (let i = 0; i < begin; i++) {
    if (scheduled[i] != null) {
      continue;
    }
    if (priorities[i] > priorities[maxPriorityAt]) {
      maxPriorityAt = i;
    }
  }
  return maxPriorityAt;
}
