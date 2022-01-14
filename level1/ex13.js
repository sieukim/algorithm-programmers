function solution(n, lost, reserve) {
  let answer = n - lost.length;

  lost.sort();
  reserve.sort();

  // 여벌이 있는 학생 중 도난 당한 학생은 제거한다.
  for (let i = 0; i < reserve.length; i++) {
    const duplicatedIndex = lost.findIndex((value) => value === reserve[i]);

    if (duplicatedIndex >= 0){
      lost[duplicatedIndex] = null;
      reserve[i] = null;
      answer++;
    }
  }

  // 분실 학생의 앞 또는 뒷 번호 학생에게 빌릴 수 있는지를 알아낸다.
  function isPossible (student) {
    const reservedIndex = reserve.findIndex((value) => value === student);

    if (reservedIndex >= 0) {
      answer++;
      reserve[reservedIndex] = null;
      return true;
    }

    return false;
  }

  for (let i = 0; i < lost.length; i++) {
    const lostStudent = lost[i];

    if (isPossible(lostStudent - 1)) continue;
    if (isPossible(lostStudent + 1)) continue;
  }

  return answer;
}