function solution(brown, yellow) {
  for (let yrows = 1; yrows <= yellow; yrows++) {
    if (yellow % yrows !== 0) {
      continue;
    }
    const ycolumns = yellow / yrows;
    if (brown === 2 * yrows + 2 * ycolumns + 4) {
      return [ycolumns + 2, yrows + 2];
    }
  }
}
