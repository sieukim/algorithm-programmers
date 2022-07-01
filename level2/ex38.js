// 다중 집합 반환 함수
function get_multiset(str) {
  // 다중 집합
  const multiset = [];
  // 정규 표현식 - 대문자 문자열 확인
  const regex = /^[A-Z]+$/;

  // 대문자 문자열로 변환
  str = str.toUpperCase();
  
  for (let i = 0; i < str.length - 1; i++) {
      const value = str[i] + str[i + 1];
      
      if (regex.test(value)) {
          multiset.push(value);
      }
  }
  
  return multiset;
}

// 다중 집합의 교집합과 합집합의 크기 반환 함수
function get_size(multiset1, multiset2) {
  // 교집합과 합집합 크기
  let [size1, size2] = [0, 0];
  // 두 집합 내 모든 요소
  const values = new Set([...multiset1, ...multiset2]);
  
  for (const value of values) {
      // 각 집합 내 개수 
      const count1 = multiset1.reduce((count, value1) => count + (value === value1), 0);
      const count2 = multiset2.reduce((count, value2) => count + (value === value2), 0);
      // 크기 계산
      size1 += Math.min(count1, count2);
      size2 += Math.max(count1, count2);
  }
  
  return [size1, size2];
}

function solution(str1, str2) {
  // 다중 집합
  const multiset1 = get_multiset(str1);
  const multiset2 = get_multiset(str2);
  
  // 모두 공집합인 경우
  if (multiset1.length === 0 && multiset2.length === 0) {
      return 65536;
  }
  
  // 교집합과 합집합의 크기
  const [size1, size2] = get_size(multiset1, multiset2);

  return parseInt(size1 / size2 * 65536);
}