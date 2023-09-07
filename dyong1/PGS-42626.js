function solution(scoville, K) {
  const m = minHeap(scoville.filter((s) => s < K));
  let mixCount = 0;
  while (m.size() > 0) {
    const min1 = m.pop();
    const min2 = m.pop();
    const mix = min1 + min2 * 2;
    if (mix < K) {
      m.add(mix);
    }
    mixCount++;
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
      if (left == null && right == null) {
        break;
      }
      if (left != null && right == null) {
        if (left < node) {
          swap(i, leftAt(i));
          i = leftAt(i);
          continue;
        }
        break;
      }
      if (left == null && right != null) {
        if (right < node) {
          swap(i, rightAt(i));
          i = rightAt(i);
          continue;
        }
        break;
      }
      if (left >= node && right >= node) {
        break;
      }
      if (left < node) {
        swap(i, leftAt(i));
        i = leftAt(i);
        continue;
      }
      if (right < node) {
        swap(i, rightAt(i));
        i = rightAt(i);
        continue;
      }
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

  for (const a of _arr) {
    add(a);
  }

  return {
    _arr: arr,
    pop,
    add,
    size,
  };
}
