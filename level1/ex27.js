function solution(n, m) {
  const answer = [];

  // 최대 공약수 구하기
  function maximumDivisor(n, m) {
    let nIndex = n;
    let mIndex = m;

    while (nIndex > 0 && mIndex > 0) {
      while (n % nIndex !== 0) {
        nIndex--;
      }

      while (m % mIndex !== 0) {
        mIndex--;
      }

      if (nIndex === mIndex) {
        break;
      }

      if (nIndex > mIndex){
        nIndex--;
      } else {
        mIndex--;
      }
    }

    return nIndex;
  }

  // 최소 공배수 구하기
  function minimumMultiple(n, m) {
    let nIndex = 1;
    let mIndex = 1;

    while (n * nIndex !== m * mIndex){
      if (n * nIndex > m * mIndex) {
        mIndex++;
      } else {
        nIndex++;
      }
    }

    return n * nIndex;
  }

  answer.push(maximumDivisor(n, m));
  answer.push(minimumMultiple(n, m));

  return answer;
}