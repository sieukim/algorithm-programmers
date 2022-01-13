function solution(numbers, hand) {
  let answer = '';

  // left -> L, right -> R
  hand === 'left' ? 'L' : 'R';

  // 손 위치
  let leftHand = 10;
  let rightHand = 12;

  // 손 위치 찾는 함수
  function findHand(number, leftHand, rightHand) {
    // 손과 숫자가 위치하는 행 찾기
    const leftHandRow = parseInt(leftHand / 3);
    const rightHandRow = rightHand % 3 === 0 ? parseInt(rightHand / 3) - 1 : parseInt(rightHand / 3);
    const numberRow = parseInt(number / 3);

    // 손과 숫자가 위치하는 행 간격 구하기 (만약 가운데 열에 있으면 거리 1씩 차감)
    const leftHandDistance = leftHand % 3 !== 2 ? Math.abs(numberRow - leftHandRow) : Math.abs(numberRow - leftHandRow) - 1;
    const rightHandDistance = rightHand % 3 !== 2 ? Math.abs(numberRow - rightHandRow) : Math.abs(numberRow - rightHandRow) - 1;

    // 간격이 같은 경우 주 사용 손 반환
    if (leftHandDistance === rightHandDistance) return hand === 'left' ? 'L' : 'R';

    // 간격이 다른 경우 더 짧은 위치의 손 반환
    return leftHandDistance < rightHandDistance ? 'L' : 'R';
  }

  numbers.forEach(number => {
    // 숫자가 0인 경우 11로 취급
    if (number === 0) number = 11;

    switch(number % 3) {
      case 0:
        answer += 'R';
        rightHand = number;
        break;
      case 1:
        answer += 'L';
        leftHand = number;
        break;
      case 2:
        const theHand = findHand(number, leftHand, rightHand);
        answer += theHand;
        theHand === 'L' ? leftHand = number: rightHand = number;
        break;
    }
  })

  return answer;
}