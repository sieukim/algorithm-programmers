function solution(number, k) {
  // number 문자열 내 startIndex와 endIndex 사이의 요소 중 최대 값과 인덱스를 반환하는 함수
  function getMaxInfo(number, startIndex, endIndex) {
    const substring = number.split('').slice(startIndex, endIndex + 1).map(value => parseInt(value));
    const maxValue = substring.reduce((a, b) => Math.max(a, b));
    const maxIndex = substring.indexOf(maxValue) + startIndex;

    return [maxValue, maxIndex];
  }

  // number 문자열에서 k개의 문자를 제거하고 남은 문자열의 배열
  const answer = [];
  // number 문자열에서 k개의 문자를 제거하고 남은 문자의 수
  const answerLength = number.length - k;

  // 최대값을 찾을 부분 문자열의 시작 인덱스
  let startIndex = 0;
  // 최대값을 찾을 부분 문자열의 끝 인덱스
  let endIndex = number.length - answerLength;

  for (let i = 1; i <= answerLength; i++) {
    const [maxValue, maxIndex] = getMaxInfo(number, startIndex, endIndex);
    // answer에 maxValue 추가
    answer.push(maxValue);
    // 시작 인덱스 갱신
    startIndex = maxIndex + 1;
    // 끝 인덱스 갱신
    endIndex = number.length - answerLength + i;
  }

  return answer.join('');
}