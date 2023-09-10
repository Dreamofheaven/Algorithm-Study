function solution(_jobs) {
  const jobs = _jobs.map(([requestedAt, executionTime], idx) => ({
    id: idx,
    requestedAt,
    executionTime,
  }));
  const compare = (ctx, lhs, rhs) => {
    if (lhs.requestedAt <= ctx.elapsed && rhs.requestedAt <= ctx.elapsed) {
      return lhs.executionTime - rhs.executionTime;
    }
    if (lhs.requestedAt <= ctx.elapsed && rhs.requestedAt > ctx.elapsed) {
      return -1;
    }
    if (lhs.requestedAt > ctx.elapsed && rhs.requestedAt <= ctx.elapsed) {
      return 1;
    }
    return lhs.requestedAt - rhs.requestedAt;
  };

  let elapsed = 0;
  let total = 0;
  let queue = makeHeap(jobs, compare, { elapsed: 0 });
  while (queue.size() > 0) {
    const job = queue.peek();

    total += Math.max(elapsed - job.requestedAt, 0) + job.executionTime;

    if (elapsed < job.requestedAt) {
      elapsed = job.requestedAt;
    }
    elapsed += job.executionTime;

    queue = makeHeap(
      queue.items().filter((j) => j.id !== job.id),
      compare,
      { elapsed }
    );
  }
  return Math.floor(total / jobs.length);
}
function makeHeap(items, compare, context) {
  const m = minHeap(compare, context);
  for (const item of items) {
    m.add(item);
  }
  // console.log({items: m.items(), context})
  return m;
}
function minHeap(compare, context) {
  const arr = [];
  const peek = () => arr[0];
  const size = () => arr.length;
  const items = () => arr;
  const add = (item) => {
    arr.push(item);
    let currentAt = arr.length - 1;
    while (currentAt > 0) {
      const parentAt = Math.floor((currentAt - 1) / 2);
      // console.log({compareResult: compare(context, arr[parentAt], arr[currentAt]), parent: arr[parentAt], current: arr[currentAt]})
      if (compare(context, arr[parentAt], arr[currentAt]) < 0) {
        break;
      }

      const tmp = arr[parentAt];
      arr[parentAt] = arr[currentAt];
      arr[currentAt] = tmp;
      currentAt = parentAt;
    }
  };
  return {
    size,
    items,
    add,
    peek,
  };
}
