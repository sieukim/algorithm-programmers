function solution(word) {
  // 알파벳 중복순열 구하기
  function getPermutations(arr, n, r) {
    // r이 1인 경우
    if (r === 1) {
      return arr.map(value => [value]);
    }

    const permutations = [];

    for (let i = 0; i < n; i++) {
      const subPermutations = getPermutations(arr, n, r - 1);
      const currentPermutations = subPermutations.map(perm => [arr[i], ...perm]);
      permutations.push(...currentPermutations);
    }
    return permutations;
  }

  const arr = ['A', 'E', 'I', 'O', 'U'];
  const n = arr.length;

  const totalPermutations = [];

  // nPi1 ~ nPin 구하기
  for (let i = 1; i <= n; i++) {
    const r = i;
    // 중복 순열을 구해 문자열로 저장
    const permutations = getPermutations(arr, n, r).map(perm => perm.join(''));
    totalPermutations.push(...permutations);
  }

  // 사전순 정렬
  totalPermutations.sort();

  return totalPermutations.indexOf(word) + 1;
}