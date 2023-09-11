function solution(sizes) {
  // 0r 1r 2r ...
  // 0c 1c 2c ...

  return findMin2({
    sizes,
  });
}

// math
function findMin2({ sizes }) {
  const shorters = [];
  const longers = [];
  for (const s of sizes) {
    shorters.push(Math.min(s[0], s[1]));
    longers.push(Math.max(s[0], s[1]));
  }

  return Math.max(...shorters) * Math.max(...longers);
}

// exhaustive search
function findMin({ sizes, currentAt, minCover }) {
  if (currentAt === sizes.length) {
    // console.log({currentAt, minCover})
    return minCover.width * minCover.height;
  }

  let min = 1000 * 1000 + 1;
  const r = sizes[currentAt];
  for (const { w, h } of [
    // original direction
    { w: r[0], h: r[1] },
    // perpendicular direction
    { w: r[1], h: r[0] },
  ]) {
    min = Math.min(
      min,
      findMin({
        sizes,
        currentAt: currentAt + 1,
        minCover: {
          width: Math.max(minCover.width, w),
          height: Math.max(minCover.height, h),
        },
      })
    );
  }
  return min;
}
