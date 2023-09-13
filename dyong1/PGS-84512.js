function solution(word) {
  const ref = { index: 0 };
  return indexOf({ word, holding: [], ref });
}
function indexOf({ word, holding, ref }) {
  if (holding.join("") === word) {
    // console.log({word, holding, ref})
    return ref.index;
  }
  if (holding.length === CHARACTERS.length) {
    return -1;
  }

  for (let i = 0; i < CHARACTERS.length; i++) {
    const ch = CHARACTERS[i];

    holding.push(ch);
    ref.index++;
    const at = indexOf({ word, holding, ref });
    if (at >= 0) {
      return at;
    }
    holding.pop();
  }
  return -1;
}
const CHARACTERS = ["A", "E", "I", "O", "U"];
