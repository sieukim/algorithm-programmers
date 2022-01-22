function solution(infos) {
  const clothes = {};

  // 주어진 정보를 의상종류: [...의상 이름]의 형태로 변환
  infos.forEach(info => {
    const type = info[1];
    const cloth = info[0];

    // 해당 종류가 처음 발견된 경우
    if (!Object.keys(clothes).includes(type)) clothes[type] = 1;
    else clothes[type]++;
  });

  // 조합 수 계산
  const values = Object.values(clothes);

  let count = 1;

  // (가지수 + 1)씩 곱하여 총 조합의 수 계산
  for (let i = 0; i < values.length; i++) {
    count = count * (values[i] + 1);
  }

  // 한 벌도 안 입는 경우는 제외
  return count - 1;
}