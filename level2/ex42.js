function solution(n, a, b) {
  // 현재 참가자 번호를 이용해 다음 라운드 참가자 번호를 반환하는 함수
  function getNumber(currentNumber) {
    return Math.ceil(currentNumber / 2);
  }

  // 같은 라운드에서 대결하는지 반환하는 함수
  function check(a, b) {
    const diff = Math.abs(Math.ceil(a / 2) - Math.ceil(b / 2));

    if (diff === 0) return true;
    else return false;
  }

  let round = 1;

  while(true) {
    // 두 참가자가 경쟁을 하는 경우(종료)
    if (check(a, b)) break;

    // 두 참가자가 경쟁하지 않는 경우(다음 라운드로)
    a = getNumber(a);
    b = getNumber(b);

    round++;
  }

  return round;
}