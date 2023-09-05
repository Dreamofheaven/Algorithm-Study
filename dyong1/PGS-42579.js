function solution(genres, plays) {
  const byGenre = {};
  for (let i = 0; i < genres.length; i++) {
    const g = genres[i];
    if (byGenre[g] == null) {
      byGenre[g] = { genre: g, totalPlays: 0, songs: [] };
    }
    byGenre[g].totalPlays += plays[i];
    byGenre[g].songs.push({
      id: i,
      plays: plays[i],
    });
  }
  const sortedGenres = Object.values(byGenre).sort((lhs, rhs) => rhs.totalPlays - lhs.totalPlays);
  return sortedGenres.flatMap((g) =>
    g.songs
      .sort((lhs, rhs) => {
        if (lhs.plays == rhs.plays) {
          return lhs.id - rhs.id;
        }
        return rhs.plays - lhs.plays;
      })
      .slice(0, 2)
      .map((s) => s.id)
  );
}
