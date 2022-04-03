function solution(genres, plays) {
  const n = genres.length;

  const songDict = {};

  // {고유번호: {장르, 재생 횟수}}
  for (let i = 0; i < n; i++) {
    songDict[i] = {
      genre: genres[i],
      play: plays[i],
    };
  }

  const genreDict = {};

  // {장르: {노래 정보(고유 번호, 재생횟수) 배열([]), 총 재생 횟수(0)}}으로 초기화
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    genreDict[genre] = {
      songs: [],
      totalPlay: 0,
    };
  }

  // {장르: {노래 정보(고유 번호, 재생횟수) 배열, 재생 횟수 배열, 총 재생 횟수}}
  for (const number in songDict) {
    const {genre, play} = songDict[number];
    genreDict[genre].songs.push([number, play]);
    genreDict[genre].totalPlay += play;
  }

  // 각 장르별 두 곡씩 뽑기
  for (const genre in genreDict) {
    const songs = genreDict[genre].songs;

    // 장르별 노래 정보 배열을 정렬
    songs.sort((a, b) => {
      // 재생 횟수가 다른 경우 재생 횟수를 기준으로 내림차순 정렬
      if (a[1] !== b[1]) {
        return b[1] - a[1];
      }
      // 재생 횟수가 같은 경우 고유 번호를 기준으로 오름차순 정렬
      else {
        return a[0] - b[0];
      }
    });

    // 상위 두곡 뽑기
    genreDict[genre].songs = songs.slice(0, 2);
  }

  const genreArr = Object.values(genreDict);

  // 총 재생 횟수를 기준으로 내림차순 정렬
  genreArr.sort((a, b) => b.totalPlay - a.totalPlay);

  const numberArr = [];

  for (const genre of genreArr) {
    const songs = genre.songs;
    const numbers = songs.map(song => parseInt(song[0]));
    numberArr.push(...numbers);
  }

  return numberArr;
}