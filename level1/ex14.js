function solution(nums) {
  const n = nums.length / 2;

  // 중복 제거
  const phoneketmonArr = [...new Set(nums)];

  return Math.min(phoneketmonArr.length, n);
}