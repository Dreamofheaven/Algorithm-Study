function solution(bridge_length, weight, truck_weights) {
  // speed of 1
  let timeSpent = 0;
  const bridge = {
    queue: [],
    length: bridge_length,
    totalWeight: 0,
    weightLimit: weight,
  };
  const trucksWaiting = truck_weights;
  while (trucksWaiting.length > 0 || bridge.queue.length > 0) {
    //console.log(JSON.stringify({bridge, trucksWaiting}))
    // after bridge <- bridge
    if (bridge.queue.length > 0 && bridge.queue[0].position === 0) {
      bridge.totalWeight -= bridge.queue[0].weight;
      bridge.queue.shift();
    }
    // in bridge
    for (const q of bridge.queue) {
      q.position--;
    }
    // bridge <- before bridge
    if (trucksWaiting.length > 0 && trucksWaiting[0] + bridge.totalWeight <= bridge.weightLimit) {
      bridge.queue.push({ weight: trucksWaiting[0], position: bridge.length - 1 });
      bridge.totalWeight += trucksWaiting[0];
      trucksWaiting.shift();
    }
    timeSpent++;
  }
  return timeSpent;
}
