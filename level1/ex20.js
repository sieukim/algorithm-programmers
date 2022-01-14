function solution(s) {
  // 주어진 조건에 맞게 단어를 바꾸는 함수
  function changeWord(word) {
    word = word.split('');

    for (let i = 0; i < word.length; i++) {
      if (i % 2) word[i] = word[i].toLowerCase();
      else word[i] = word[i].toUpperCase();
    }

    return word.join('');
  }

  // 공백을 기준으로 파싱하여 배열로 저장
  const strArr = s.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = changeWord(strArr[i]);
  }

  return strArr.join(" ");
}