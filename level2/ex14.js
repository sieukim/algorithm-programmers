function solution(w, h) {
  let count = 0;

  // 직사각형 대각선을 나타내는 일차 함수
  // f(x) = (h / w) * x 인데
  // h / w 계산에서 소수점이 부정확할 수 있어
  // h * x 먼저하고 w로 나눔
  const fx = (x) => h * x / w;

  for (let i = 0; i < w; i++) {
    const prev = Math.floor(fx(i));
    const next = Math.ceil(fx(i + 1));
    const diff = next - prev;

    count += diff;
  }

  return w * h - count;
}