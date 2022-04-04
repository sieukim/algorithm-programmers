function solution(a, b) {
  // 요일 맵
  const dayMap = {
      0: 'SUN',
      1: 'MON',
      2: 'TUE',
      3: 'WED',
      4: 'THU',
      5: 'FRI',
      6: 'SAT',
  };

  // 요일 정보
  const day = new Date(`2016-${a}-${b}`).getDay();
  // 요일 정보 매핑
  return dayMap[day];
}