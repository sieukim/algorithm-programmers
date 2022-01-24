function solution(brown, yellow) {
  // yellow: width * height 직사각형
  let width, height;

  for (width = Math.ceil(Math.sqrt(yellow)); width <= yellow; width++) {
    // 정수가 아닌 width인 경우
    if (yellow % width > 0) continue;
    // 정수 width인 경우
    height = yellow / width;

    // brown: yellow를 둘러싸는 테두리 1줄
    const border = 2 * (width + height) + 4;

    // 현재 테두리 격자 개수가 주어진 brown의 개수와 같은 경우
    if (border === brown) return [width + 2, height + 2];
  }
}