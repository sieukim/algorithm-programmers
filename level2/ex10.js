// 캐시 삽입 함수
function add(cache, value, size) {
  // 빈 자리가 있는 경우
  if (cache.length < size) {
      cache.push(value);
  }
  // 빈 자리가 없는 경우
  else if (size > 0) {
      // 이미 삽입된 경우
      if (cache.includes(value)) {
          cache = cache.filter(item => item !== value);
      }
      // 새로 삽입하는 경우
      else {
          cache = cache.slice(1);
      }
      cache.push(value);
  }
  return cache;
}

function solution(cacheSize, cities) {
  // 실행 시간
  let answer = 0;
  // 캐시
  let cache = [];
  // 모두 소문자로 변환
  cities = cities.map(city => city.toLowerCase());
  
  for (const city of cities) {
      // 캐시 hit
      if (cache.includes(city)) {
          answer += 1;
      }
      // 캐시 miss
      else {
          answer += 5;
      }
      // 캐시 삽입
      add(cache, city, cacheSize);
  }
  
  return answer;
}