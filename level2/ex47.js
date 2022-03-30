function solution(k, dungeons) {
  // 배열 arr 내에 n개의 요소를 갖는 순열을 반환하는 함수
  function getPermutations(arr, n) {
    if (n === 1) {
      return arr.map(value => [value]);
    }

    const result = [];

    arr.forEach((value, index, arr) => {
      const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
      const permutations = getPermutations(rest, n - 1);
      const attached = permutations.map(permutation => [value, ...permutation]);

      result.push(...attached);
    });

    return result;
  }

  // 주어진 순서로 던전을 돌 경우 피로도 k 내에서 탐험 가능한 던전의 수를 반환하는 함수
  function getCount(k, orders) {
    let count = 0;

    for (const order of orders) {
      // 현재 순서 던전의 [최소 필요도, 소모 피로도]
      const [minimum, using] = dungeons[order];

      // 현재 피로도 k가 최소 필요 피로도보다 크거나 같은 경우
      if (k >= minimum) {
        // 소모 피로도만큼 감소
        k -= using;
        count++;
      }
    }

    return count;
  }

  // 던전의 개수
  const n = dungeons.length;

  // 0부터 (n-1)까지 정수값(던전 번호)으로 초기화한 배열
  const arr = Array.from({length: n}, (value, index) => index);

  // 던전 번호 순열
  const permutations = getPermutations(arr, n);

  // 최대 던전 수
  let maxDungeons = 0;

  permutations.forEach(permutation => {
    const count = getCount(k, permutation);
    maxDungeons = Math.max(maxDungeons, count);
  });

  return maxDungeons;
}