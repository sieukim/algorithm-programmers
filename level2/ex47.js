function solution(k, dungeons) {
  // 배열 arr 내에 n개의 요소를 갖는 순열을 반환하는 함수
  function getPerms(arr, n) {
      if (n === 1) {
          return arr.map(value => [value]);
      }
      
      const result = [];
      
      arr.forEach((value, index, arr) => {
          const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
          const perms = getPerms(rest, n - 1);
          const attached = perms.map(perm => [value, ...perm]);
          
          result.push(...attached);
      });
      
      return result;
  }
  
  // 해당 순서에서 탐험 가능한 던전 수를 반환하는 함수
  function getCount(k, perm) {
      let count = 0;
      
      for (let i = 0; i < perm.length; i++) {
          const [need, use] = perm[i];
          
          if (k >= need) {
              k -= use;
              count += 1;
          }
      }
      
      return count;
  }
  
  // 가능한 모든 순서 
  const perms = getPerms(dungeons, dungeons.length);
  // 모든 순서에 대한 탐색 가능한 던전 수
  const counts = perms.map(perm => getCount(k, perm));
  
  return counts.reduce((a, b) => Math.max(a, b));
}