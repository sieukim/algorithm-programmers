function solution(n, words) {
  // 현재 인덱스를 이용하여 [번호, 차례]를 반환하는 함수
  function getAnswer(n, index) {
    const player = index % n + 1;
    const turn = parseInt(index / n) + 1;

    return [player, turn];
  }

  // 정답 배열
  const answer = [];

  // 이전 단어의 마지막 글자
  let lastCharacter;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // lastCharacter로 시작하지 않는 경우
    if (lastCharacter && lastCharacter !== word[0]) {
      return getAnswer(n, i);
    }

    // lastCharacter 갱신
    lastCharacter = word[word.length - 1];

    // 중복 단어인 경우
    if (words.indexOf(word) !== i) {
      return getAnswer(n, i);
    }

  }

  return [0, 0];
}