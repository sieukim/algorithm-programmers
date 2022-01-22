function solution(s) {
  // 문자열을 n개 단위로 자르는 함수
  function slice(str, n) {
    const reg = new RegExp(`[a-z]{${n}}`, `g`);
    const result = str.match(reg);

    // n의 배수로 나누어 떨어지지 않는 경우
    if (str.length % n !== 0) {
      const q = parseInt(str.length / n);

      result.push(str.slice(q * n))
    }

    return result;
  }

  // 주어진 배열을 압축하는 함수
  function compress(arr) {
    let str = '';

    for (let i = 0; i < arr.length; i++) {
      // arr[i]와 같은 문자가 연속되는 횟수 카운팅
      let pivot = arr[i];
      let count = 1;

      for (let j = i; j < arr.length; j++) {
        // 다음 문자와 pivot이 같은 경우(연속인 경우)
        if (arr[j + 1] === pivot) {
          count++;
          continue;
        }
        // 다음 문자와 pivot이 다른 경우(연속이 깨진 경우)
        else {
          str += count > 1 ? count + pivot : pivot;
          i = j;
          break;
        }
      }
    }

    return str;
  }

  // 주어진 문자열을 문자열 길이 이하 단위로 자르고 압축하여 최소 문자열 길이를 찾아냄
  let minLength = s.length;

  for (let i = 1; i < s.length; i++) {
    const sliced = slice(s, i);
    const compressed = compress(sliced);

    minLength = Math.min(minLength, compressed.length);
  }

  return minLength;
}