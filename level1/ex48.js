//  총 라운드 정보 문자열 -> 각 라운드 정보 리스트
function get_result(totalResult) {
  // 각 라운드 정보 리스트
  const result = Array.from({length: 3},
    () => ({
      'score': '',
      'bonus': undefined,
      'option': undefined,
    }));

  // 현재 라운드
  let current = 0;

  // 탐색
  for (const value of totalResult) {
    // 점수인 경우
    if (!isNaN(value)) {
      // 현재 라운드 보너스 정보가 있는 경우
      if (result[current]['bonus']) {
        // 다음 라운드로 이동
        current += 1;
      }
      // 점수 정보에 추가
      result[current]['score'] += value;
    }
    // 보너스인 경우
    else if (['S', 'D', 'T'].includes(value)) {
      // 보너스 정보에 추가
      result[current]['bonus'] = value;
    }
    // 옵션인 경우
    else {
      // 옵션 정보에 추가
      result[current]['option'] = value;
    }
  }

  return result;
}

function solution(dartResult) {
  // 각 라운드 정보 리스트
  const result = get_result(dartResult);

  // 각 라운드 정보 탐색
  for (let i = 0; i < 3; i++) {
    // 현재 라운드 점수, 보너스, 옵션
    let [score, bonus, option] = Object.values(result[i]);

    // 싱글 보너스인 경우
    if (bonus === 'S') {
      score = parseInt(score);
    }
    // 더블 보너스인 경우
    else if (bonus === 'D') {
      score = parseInt(score) ** 2;
    }
    // 트리플 보너스인 경우
    else {
      score = parseInt(score) ** 3;
    }

    // 스타상인 경우
    if (option === '*') {
      // 현재 점수 2배
      score *= 2;
      // 이전 점수 2배
      if (i > 0) {
        result[i - 1]['score'] *= 2;
      }
    }
    // 아차상인 경우
    else if (option === '#') {
      // 현재 점수 -1배
      score *= -1;
    }

    // 현재 라운드 최종 점수 대입
    result[i]['score'] = score;
  }

  // 총 점수
  return result[0]['score'] + result[1]['score'] + result[2]['score'];
}