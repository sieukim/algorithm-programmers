function solution(crossingTime, maxWeight, trucks) {
  // 다리를 건너는 트럭: [무게, 현재 위치]
  let passing = [];
  // 현재 시간
  let time = 0;
  
  while (!(trucks.length === 0 && passing.length === 0)) {
      // 현재 위치 이동
      passing = passing.filter(value => value[1] < crossingTime)
                       .map(value => [value[0], value[1] + 1]);
      
      // 다리 위 트럭 수
      const count = passing.length;
      // 다리 위 트럭 무게
      const weight = passing.map(value => value[0])
                            .reduce((a, b) => a + b, 0);
      
      // 건널 수 있는 경우
      if (count < crossingTime && weight + trucks[0] <= maxWeight) {
          passing.push([trucks.shift(), 1]);
      }
      
      // 현재 시간 갱신
      time += 1;
  }
  
  return time;
}