function solution(numbers) {
  // 정수 => 문자열
  numbers = numbers.map(number => String(number));
  
  // 정렬
  numbers.sort((prev, curr) => (curr + prev) - (prev + curr));
  
  // 리스트 => 문자열
  numbers = String(BigInt(numbers.join('')));
  
  return numbers;
}