function solution(str1, str2) {
  // 집합을 {원소: 개수}의 객체로 변환하는 함수
  function toDict(set) {
    const dict = {};

    set.forEach(element => {
      if (element in dict) {
        dict[element]++;
      } else {
        dict[element] = 1;
      }
    });

    return dict;
  }

  // 두 집합을 다중 합집합한 결과의 길이를 반환하는 함수
  function union(set1, set2) {
    // set1의 {원소: 개수} 정보를 갖는 객체
    const dict1 = toDict(set1);

    // set2의 {원소: 개수} 정보를 갖는 객체
    const dict2 = toDict(set2);

    // set1과 set2의 다중 합집합 결과의 {원소: 개수} 정보를 갖는 객체
    const dict = {};

    // dict1 순회
    for (const element in dict1) {
      const value1 = dict1[element];
      const value2 = dict2[element];

      // dict2에 존재하지 않는 원소인 경우
      if (!value2) {
        // dict1의 값으로 결정
        dict[element] = value1;
        continue;
      }
      // dict1과 dict2에서의 값 중 최대값으로 결정
      dict[element] = Math.max(value1, value2);
    }

    // dict2 순회
    for (const element in dict2) {
      const value1 = dict1[element];
      const value2 = dict2[element];

      // dict1에 존재하지 않는 원소인 경우
      if (!value1) {
        // dict2의 값으로 결정
        dict[element] = value2;
        continue;
      }
    }

    // 원소 개수 집합
    const values = Object.values(dict);

    // 원소 개수의 총 합
    return values.reduce((a, b) => a + b);
  }

  // 두 다중 집합의 교집합을 반환하는 함수
  function intersect(set1, set2) {
    // set1의 {원소: 개수} 정보를 갖는 객체
    const dict1 = toDict(set1);

    // set2의 {원소: 개수} 정보를 갖는 객체
    const dict2 = toDict(set2);

    // set1과 set2의 다중 합집합 결과의 {원소: 개수} 정보를 갖는 객체
    const dict = {};

    // dict1 순회
    for (const element in dict1) {
      const value1 = dict1[element];
      const value2 = dict2[element];

      // dict2에 존재하지 않는 원소인 경우
      if (!value2) {
        continue;
      }
      // dict1과 dict2에서의 값 중 최대값으로 결정
      dict[element] = Math.min(value1, value2);
    }

    // 원소 개수 집합
    const values = Object.values(dict);

    // 원소 개수의 총 합
    return values.length > 0 ? values.reduce((a, b) => a + b) : 0;
  }

  // 문자열이 영문자로만 이루어졌는지 확인하는 함수
  function isEnglish(str) {
    // 각 문자의 아스키 코드 정보를 담는 배열
    const ascii = str.split('').map((_, index) => str.charCodeAt(index));
    // 65 ~ 90 (대문자), 97 ~ 122 (소문자) 요소 제거
    const answer = ascii.filter(value => {
      // 대문자
      if (value >= 65 && value <= 90) return false;
      // 소문자
      if (value >= 97 && value <= 122) return false;
      // 그 외
      return true;
    });
    // 남은 문자가 없는 경우 true, 있는 경우 false 반환
    return answer.length === 0;
  }

  // 주어진 문자열을 두 글자씩 끊어 배열로 반환하는 함수
  function splitted(str) {
    const splittedSet = [];

    for (let i = 0; i < str.length - 1; i++) {
      // 두 글자씩 끊기
      const subStr = str[i] + str[i + 1];

      // 영문자로만 이루어진 경우
      if (isEnglish(subStr)) {
        splittedSet.push(subStr);
      }
    }

    // 오름차순 정렬
    splittedSet.sort();

    return splittedSet;
  }

  const N = 65536;

  // 입력 문자열을 두 글자씩 끊기
  const splittedSet1 = splitted(str1.toUpperCase());
  const splittedSet2 = splitted(str2.toUpperCase());

  // 두 집합 모두 공집합인 경우
  if (splittedSet1.length === 0 && splittedSet2.length === 0) {
    return 1 * N;
  }

  // 합집합
  const unionResult = union(splittedSet1, splittedSet2);
  // 교집합
  const intersectResult = intersect(splittedSet1, splittedSet2);

  // 자카드 유사도
  const similarity = intersectResult / unionResult;

  return Math.floor(similarity * N);
}