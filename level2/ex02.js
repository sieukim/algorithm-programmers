function solution(s) {
  const words = s.split("");

  for (let i = 0; i < words.length; i++) {
    // 첫 글자 또는 공백 이후 첫 문자
    if (!words[i - 1] || words[i - 1] === ' ') {
      // 숫자인 경우
      if (words[i] >= 0 && words[i] <= 9) {
        continue;
      }
      // 문자인 경우
      else {
        words[i] = words[i].toUpperCase();
      }
    } else {
      words[i] = words[i].toLowerCase();
    }
  }

  return words.join("");
}