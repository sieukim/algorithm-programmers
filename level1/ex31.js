function solution(phone_number) {
  // 주어진 전화 번호 -> 배열
  const phone_number_arr = phone_number.split('');
  const phone_number_length = phone_number.length;

  for (let i = 0; i < phone_number_length - 4; i++) {
    phone_number_arr[i] = '*';
  }

  return phone_number_arr.join('');
}