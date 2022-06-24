function solution(word) {
  // 중복 순열 
  function getPerms(arr, r) {
      if (r === 1) {
          return arr.map(value => [value]);
      }
      
      const perms = [];
      
      for (let i = 0; i < arr.length; i++) {
          const subPerms = getPerms(arr, r - 1);
          const curPerms = subPerms.map(perm => [arr[i], ...perm]);
          perms.push(...curPerms);
      }
      
      return perms;
  }
  
  // 모음 리스트 
  const arr = ['A', 'E', 'I', 'O', 'U'];
  
  // 단어 리스트 
  const words = [];
  
  // 중복 순열
  for (let i = 1; i <= arr.length; i++) {
      const perms = getPerms(arr, i).map(perm => perm.join(''));
      words.push(...perms);
  }
  
  // 오름차순 정렬 
  words.sort();

  return words.indexOf(word) + 1;
}