function solution(dartResult) {
  let answer = 0;

  // S: single
  function single(score) {
    return Math.pow(score, 1);
  }

  // D: double
  function double(score) {
    return Math.pow(score, 2);
  }

  // T: triple
  function triple(score) {
    return Math.pow(score, 3);
  }

  // 점수|보너스|[옵션] 패턴으로 파싱
  const results = dartResult.match(/([0-9][0]?)(S|D|T)(\*|#)?/g);

  const scores = [];

  for (let i = 0; i < results.length; i++) {
    const result = results[i].split('');

    let score = 0;
    let bonus = '';
    let option = '';

    // score
    score = result[1] === '0' ? 10 : parseInt(result[0]);
    // bonus
    bonus = score === 10 ? result[2] : result[1];
    // option
    option = score === 10 ? result[3] : result[2];

    scores.push({
      score: score,
      bonus: bonus,
      option: option,
      multiple: 1
    });
  }

  // bonus와 option 계산
  for (let i = 0; i < scores.length; i++) {
    let score = scores[i].score;

    // bonus
    switch (scores[i].bonus) {
      case 'S':
        scores[i].score = single(scores[i].score);
        break;
      case 'D':
        scores[i].score = double(scores[i].score);
        break;
      case 'T':
        scores[i].score = triple(scores[i].score);
        break;
    }

    // option
    switch (scores[i].option) {
      case '*':
        if (i > 0) scores[i - 1].multiple = scores[i - 1].multiple * 2;
        scores[i].multiple = scores[i].multiple * 2;
        break;
      case '#':
        scores[i].multiple = scores[i].multiple * -1;
    }
  }

  // 총 점수 계산
  for (let i = 0; i < scores.length; i++) {
    answer += scores[i].score * scores[i].multiple;
  }

  return answer;
}