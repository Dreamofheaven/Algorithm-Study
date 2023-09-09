function solution(operations) {
  const min = heap({ compare: (lhs, rhs) => lhs - rhs });
  const max = heap({ compare: (lhs, rhs) => rhs - lhs });

  for (const o of operations) {
    const [operator, _operand] = o.split(" ");
    const operand = Number(_operand);
    // console.log({operator, operand, min: min._arr, max: max._arr})

    // insertion
    if (operator === "I") {
      min.add(operand);
      max.add(operand);
      continue;
    }

    // deletion
    if (min.size().length === 0) {
      continue;
    }
    if (operand < 0) {
      const removed = min.pop();
      max.remove(removed);
      continue;
    }
    const removed = max.pop();
    min.remove(removed);
  }
  // console.log({min: min._arr, max: max._arr})

  return [max.peek() ?? max.size(), min.peek() ?? min.size()];
}

function heap({ compare }) {
  const _arr = [];
  const swap = (idx1, idx2) => {
    const tmp = _arr[idx1];
    _arr[idx1] = _arr[idx2];
    _arr[idx2] = tmp;
  };
  const add = (elem) => {
    _arr.push(elem);
    let currentAt = _arr.length - 1;
    while (currentAt > 0) {
      const parentAt = Math.floor((currentAt - 1) / 2);
      if (compare(_arr[parentAt], _arr[currentAt]) < 0) {
        break;
      }
      swap(parentAt, currentAt);
      currentAt = parentAt;
    }
  };
  const leftChildAt = (at) => at * 2 + 1;
  const rightChildAt = (at) => at * 2 + 2;
  const removeAt = (elemAt) => {
    _arr[elemAt] = _arr[_arr.length - 1];
    _arr.pop();

    let currentAt = elemAt;
    while (leftChildAt(currentAt) < _arr.length) {
      let smallerAt = leftChildAt(currentAt);
      if (rightChildAt(currentAt) < _arr.length && _arr[rightChildAt(currentAt)] < _arr[leftChildAt(currentAt)]) {
        smallerAt = rightChildAt(currentAt);
      }
      swap(currentAt, smallerAt);
      currentAt = smallerAt;
    }
  };
  const pop = () => {
    const result = _arr[0];
    removeAt(0);
    return result;
  };
  const remove = (elem) => {
    const at = _arr.indexOf(elem);
    // console.log({at, _arr, elem})
    if (at < 0) {
      return null;
    }

    const removed = elem[at];
    removeAt(at);
    return removed;
  };
  const peek = () => _arr[0];
  const size = () => _arr.length;

  return {
    _arr,
    add,
    remove,
    pop,
    peek,
    size,
  };
}
