function solution(people, limit) {
  // 몸무게 기준으로 오름차순 정렬
  people.sort((a, b) => a - b);

  let count = 0;
  let left = 0;
  let right = people.length - 1;

  while(left <= right) {
    if (people[left] + people[right] > limit) {
      count++;
      right--;
    } else {
      count++;
      left++;
      right--;
    }
  }

  return count;
}