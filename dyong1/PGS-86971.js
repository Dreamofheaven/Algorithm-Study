function solution(n, wires) {
  let min = Infinity;
  const graph = makeGraph({ wires });
  for (let i = 0; i < wires.length; i++) {
    const area1 = nodeCount({ graph, cut: wires[i], begin: wires[i][0] });
    const area2 = nodeCount({ graph, cut: wires[i], begin: wires[i][1] });
    // console.log({area1, area2})
    min = Math.min(min, Math.abs(area1 - area2));
  }
  return min;
}
function makeGraph({ wires }) {
  const g = {
    nodeById: {},
  };

  for (const [from, to] of wires) {
    if (g.nodeById[from] == null) {
      g.nodeById[from] = { id: from, adj: {} };
    }
    if (g.nodeById[to] == null) {
      g.nodeById[to] = { id: to, adj: {} };
    }
    g.nodeById[from].adj[to] = g.nodeById[to];
    g.nodeById[to].adj[from] = g.nodeById[from];
  }
  return g;
}
function nodeCount({ graph, cut, begin }) {
  let count = 0;
  const visited = {};
  const queue = [begin];
  while (queue.length > 0) {
    const node = queue[0];
    count++;
    visited[node] = true;

    queue.shift();

    for (const a in graph.nodeById[node].adj) {
      if (visited[a] === true) {
        continue;
      }
      if (cut[0] == node && cut[1] == a) {
        continue;
      }
      if (cut[1] == node && cut[0] == a) {
        continue;
      }
      queue.push(a);
    }
  }
  return count;
}

/*
function cutWire({wires, cutAt, adj, ref}) {
    const cut = wires[cutAt]
    
    let areaById = {
        [cut[0]]: 1,
        [cut[1]]: 2
    }
    let countByArea = {
        'a': 1,
        'b': 1,
    }
    let area1StartAt = 0
    for(let i=0; i < wires.length; i++) {
        if(i === cutAt) {
            continue
        }
        if(wires[i][0] === cut[0]) {
            area1StartAt = i;
            break;
        }
    }
    let at = wires[area1StartAt]
    while(
        adj[at[0]] != null && adj[at[0]][at[1]] != null
          && at[0] !== cut[0] && at[1] !== cut[1]
    ) {
        at = 
    }
    
    ref.min = Math.min(ref.min, Math.abs(countByArea[1] - countByArea[2]))
}
*/
