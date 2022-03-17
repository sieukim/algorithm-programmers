function solution(msg) {
  // 출력 색인번호 배열
  const answer = [];

  // 사전
  const dict = {};

  // 길이가 1인 모든 단어를 포함하도록 사전을 초기화
  for (let i = 0; i < 26; i++) {
    // 아스키 코드 -> 문자 변환
    const charCode = String.fromCharCode(65 + i);
    // dict 초기화
    dict[`${charCode}`] = i + 1;
  }

  for (let i = 0; i < msg.length; i++) {
    // 사전에서 현재 입력과 일치하는 가장 긴 문자열 w
    let w = '';
    // for문 순회 인덱스
    let j = i;

    for (j = i; j < msg.length; j++) {
      // 사전에 포함하는 경우
      if (dict[`${w + msg[j]}`]) {
        w += msg[j];
        continue;
      }
      // 사전에 포함하지 않는 경우
      break;
    }

    // w에 해당하는 사전의 색인 번호를 출력
    answer.push(dict[`${w}`]);
    // w + 다음글자를 사전에 등록
    dict[`${w + msg[j]}`] = Object.keys(dict).length + 1;
    // i 갱신
    i += w.length - 1;

  }
  return answer;
}