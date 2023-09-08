function solution(scoville, K) {
  const m = minHeap();
  for (const s of scoville) {
    m.add(s);
  }

  let mixCount = 0;
  let lastMix = -1;
  // decreasing
  while (m.peek() < K && m.size() > 1) {
    const min1 = m.pop();
    const min2 = m.pop();
    const mix = min1 + min2 * 2;

    m.add(mix);

    mixCount++;
    lastMix = mix;
  }
  if (m.peek() < K) {
    return -1;
  }
  return mixCount;
}
function minHeap(_arr) {
  const arr = [];
  const leftAt = (i) => 2 * i + 1;
  const rightAt = (i) => 2 * i + 2;
  const parentAt = (i) => Math.floor((i - 1) / 2);
  const swap = (a, b) => {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  };
  const peek = () => arr[0];
  const pop = () => {
    if (arr.length == 0) {
      return null;
    }

    const peek = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();

    let i = 0;
    while (true) {
      const node = arr[i];
      const left = arr[leftAt(i)];
      const right = arr[rightAt(i)];
      if (node == null) {
        break;
      }
      if (left == null) {
        break;
      }

      let smallerAt = leftAt(i);
      if (right != null && left > right) {
        smallerAt = rightAt(i);
      }
      if (node <= arr[smallerAt]) {
        break;
      }
      swap(i, smallerAt);
      i = smallerAt;
    }

    return peek;
  };
  const add = (elem) => {
    arr.push(elem);
    let i = arr.length - 1;
    while (true) {
      const node = arr[i];
      const parent = arr[parentAt(i)];
      if (parent == null) {
        break;
      }
      if (parent <= node) {
        break;
      }
      swap(parentAt(i), i);
      i = parentAt(i);
    }
  };
  const size = () => arr.length;

  return {
    _arr: arr,
    peek,
    pop,
    add,
    size,
  };
}
