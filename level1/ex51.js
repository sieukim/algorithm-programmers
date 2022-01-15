function solution(sizes) {
  let maximumWidth = 0;
  let maximumHeight = 0;

  sizes.forEach(size => {
    // 더 작은 길이를 height로 설정
    const width = size[0] > size[1] ? size[0] : size[1];
    const height = size[0] > size[1] ? size[1] : size[0];

    if (width > maximumWidth) maximumWidth = width;
    if (height > maximumHeight) maximumHeight = height;
  });

  return maximumWidth * maximumHeight;
}