function solution(numbers, hand) {
  // 로그 딕셔너리
  const logs = {
      'all': [],
      'R': [10],
      'L': [12],
  };
  
  // 손 위치 딕셔너리
  const hands = {
      0: undefined, 2: undefined, 
      5: undefined, 8: undefined,
      1: 'L', 4: 'L', 7: 'L',
      3: 'R', 6: 'R', 9: 'R',
  };
  
  // 두 번호 사이 거리를 반환하는 함수
  const dist = (n1, n2) => {
      // 두 번호 중 하나가 0인 경우 11로 변경
      n1 = n1 === 0 ? 11 : n1;
      n2 = n2 === 0 ? 11 : n2;
      
      // 좌표 계산을 위해 1씩 감소
      n1--;
      n2--;
      
      // n1 좌표
      const x1 = parseInt(n1 / 3);
      const y1 = n1 % 3;
      // n2 좌표
      const x2 = parseInt(n2 / 3);
      const y2 = n2 % 3;

      // 거리 반환
      return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }
  
  for (const number of numbers) {
      // 현재 번호에 해당하는 손
      let using_hand = hands[number];
      
      // 손이 정해지지 않은 경우
      if (!using_hand) {
          // 오른손 최근 위치와 현재 번호 사이의 거리
          const dist_r = dist(logs['R'].slice(-1)[0], number);
          // 왼손 최근 위치와 현재 번호 사이의 거리
          const dist_l = dist(logs['L'].slice(-1)[0], number);
          
          // 오른손이 가까운 경우
          if (dist_r < dist_l) {
              // 오른손 사용
              using_hand = 'R';
          } 
          // 왼손이 가까운 경우
          else if (dist_r > dist_l) {
              // 왼손 사용
              using_hand = 'L';
          }
          // 거리가 같은 경우
          else {
              using_hand = hand[0].toUpperCase();
          }
      }
      
      // 로그에 추가
      logs['all'].push(using_hand);
      logs[using_hand].push(number);
  }
  
  // 모든 로그를 반환
  return logs.all.join('');
}