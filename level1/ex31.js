function solution(phone_number) {
  // 전화번호 길이
  const n = phone_number.length;
  // 앞 (n - 4)자리
  const frontNumber = new Array(n - 4).fill('*').join('');
  // 뒤 4자리
  const backNumber = phone_number.slice(n - 4);
  
  return frontNumber + backNumber;
}