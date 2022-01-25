function solution(fees, records) {
  // 변수로 주어진 '00:00' 형식의 두 시간의 차이 구하기(분)
  function getTime(timeIN, timeOUT = '23:59') {
    // timeIN의 시, 분 구하기
    const hoursIN = parseInt(timeIN.split(':')[0]);
    const minutesIN = parseInt(timeIN.split(':')[1]);

    // timeOUT의 시, 분 구하기
    const hoursOUT = parseInt(timeOUT.split(':')[0]);
    const minutesOUT = parseInt(timeOUT.split(':')[1]);

    // 정렬에 의해 timeOUT가 timeIN보다 더 늦은 시간임
    return (hoursOUT - hoursIN) * 60 + (minutesOUT - minutesIN);
  }

  // 주차 요금 구하는 함수
  function calculate(time, fees) {
    // 기본 시간(분)
    const defaultTime = fees[0];
    // 기본 요금(원)
    const defaultFee = fees[1];
    // 단위 시간(분)
    const unitTime = fees[2];
    // 단위 요금(원)
    const unitFee = fees[3];

    // 누적 주차 시간이 기본 시간 이하인 경우
    if (time <= defaultTime) return defaultFee;
    // 누적 주차 시간이 기본 시간 초과인 경우
    else return defaultFee + Math.ceil((time - defaultTime) / unitTime) * unitFee;
  }

  // 차량 번호를 기준으로 오름차순 정렬
  records.sort((a, b) => {
    const carA = a.split(' ')[1];
    const carB = b.split(' ')[1];

    return carA - carB;
  });

  // 주차 누적 시간 배열
  const cumTimes = [];
  // 주차 누적 시간
  let cumTime = 0;

  // 초기값 설정(시각, 차량번호, 내역)
  let [prevTime, prevCar, prevHistory] = records[0].split(' ');

  for (let i = 1; i < records.length; i++) {
    // [시각, 차량번호, 내역]
    const [time, car, history] = records[i].split(' ');

    // 이전 차가 입차했을 떄
    if (prevHistory === 'IN') {
      // 같은 차가 출차한 경우
      if (prevCar === car) {
        // 주차 누적 시간 갱신
        cumTime += getTime(prevTime, time);
        // 내역 갱신
        prevHistory = history;
      }
      // 다른 차가 입차한 경우
      else {
        // 주차 누적 시간 갱신 & 추가 & 초기화
        cumTime += getTime(prevTime);
        cumTimes.push(cumTime);
        cumTime = 0;
        // 시각, 차량번호, 내역 갱신
        prevTime = time;
        prevCar = car;
        prevHistory = history;
      }
    }
    // 이전 차가 출차했을 때
    else {
      // 같은 차가 입차한 경우
      if (prevCar === car) {
        // 시각, 내역 갱신
        prevTime = time;
        prevHistory = history;
      }
      // 다른 차가 입차한 경우
      else {
        // 주차 누적 시간 추가 & 초기화
        cumTimes.push(cumTime);
        cumTime = 0;
        // 시각, 차량번호, 내역 갱신
        prevTime = time;
        prevCar = car;
        prevHistory = history;
      }
    }
  }

  // 마지막 차량 누적 시간 추가
  if (prevHistory === 'OUT') {
    cumTimes.push(cumTime);
  } else {
    cumTime += getTime(prevTime);
    cumTimes.push(cumTime);
  }

  return cumTimes.map(cumTime => calculate(cumTime, fees));
}