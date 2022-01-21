function solution(cacheSize, cities) {
  if (cacheSize === 0) return 5 * cities.length;

  // 총 실행 시간
  let answer = 0;

  // 캐시
  const cache = {};

  for (let i = 0; i < cities.length; i++) {
    const keys = Object.keys(cache);
    const values = Object.values(cache).sort((a, b) => a - b);
    const city = cities[i].toLowerCase();

    // cache hit
    if (keys.includes(city)) {
      // 실행 순서 갱신
      delete cache[city];
      cache[city] = i;
      answer += 1;
    }
    // cache miss
    else {
      // 빈 자리가 없는 경우
      if (keys.length === cacheSize) {
        delete cache[keys[0]];
      }

      cache[city] = i;
      answer += 5;
    }
  }

  return answer;
}