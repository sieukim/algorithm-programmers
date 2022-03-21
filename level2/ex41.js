function solution(crossingTime, maxWeight, trucks) {
  // 다리를 건너는 트럭 스택
  const crossingTrucks = [];
  // 기다리는 트럭 스택 (weight를 {weight}으로 변환)
  const waitingTrucks = trucks.map(weight => ({weight}));

  // 현재 시간
  let currentTime = 1;
  // 다리 위 모든 트럭의 무게
  let weights = 0;

  for (let i = 0; i < trucks.length; i++) {
    // 다리 위에 트럭이 있을 때
    if (crossingTrucks.length > 0) {
      // 제일 먼저 건너기 시작한 트럭
      const crossingTruck = crossingTrucks.shift();

      // 다 건넌 경우
      if (crossingTruck.endTime === currentTime) {
        // 무게 갱신
        weights -= crossingTruck.weight;
      }
      // 다 못 건넌 경우
      else {
        crossingTrucks.unshift(crossingTruck);
      }
    }

    // 대기 트럭
    const waitingTruck = waitingTrucks.shift();

    // 다리에 오를 수 있는 경우
    if (weights + waitingTruck.weight <= maxWeight) {
      // 트럭 객체에 startTime, endTime 추가
      waitingTruck.startTime = currentTime;
      waitingTruck.endTime = currentTime + crossingTime;

      // crossingTruck에 추가
      crossingTrucks.push(waitingTruck);
      // 무게 갱신
      weights += waitingTruck.weight;
    }
    // 다리에 오를 수 없는 경우
    else {
      // waitingTruck에 다시 추가
      waitingTrucks.unshift(waitingTruck);
      i--;
    }
    currentTime++;
  }

  // 마지막에 건너는 트럭
  const lastCrossingTruck = crossingTrucks.pop();

  return lastCrossingTruck.endTime;
}