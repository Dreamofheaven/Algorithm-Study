// math: combinations
function solution(clothes) {
  const clothesByType = {};
  for (const c of clothes) {
    if (clothesByType[c[1]] == null) {
      clothesByType[c[1]] = [c[0]];
      continue;
    }
    clothesByType[c[1]].push(c[0]);
  }
  return Object.values(clothesByType).reduce((acc, cc) => acc * (cc.length + 1), 1) - 1;
}

// backtracking: failed for low performance
// function solution(clothes) {
//     const kinds = Array.from(new Set(clothes.map(c => c[1])))
//     return combinations({clothes, kinds, beginAt: 0, wearing: {}, worn: {}})
// }
// function combinations({clothes, kinds, beginAt, wearing, worn}) {
//     if(beginAt > clothes.length -1) {
//         return 0
//     }
//     const cc = clothes.slice(beginAt)
//     let sum = 0
//     for(const c of cc) {
//         const ctype = c[1]
//         if(wearing[ctype] != null) {
//             continue
//         }
//         const next = {...wearing, [ctype]: c}
//         const hash = hashWearing({kinds, wearing: next})
//         if(worn[hash] != null) {
//             continue
//         }
//         worn[hash] = true
//         sum += 1 + combinations({clothes, kinds, beginAt: beginAt+1, wearing: next, worn})
//     }
//     return sum
// }

// function hashWearing({kinds, wearing}) {
//     return kinds.map(k => wearing[k]?.[0]).join()
// }
