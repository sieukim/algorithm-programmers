// 사전에 포함되는 가장 긴 문자열 w를 찾는 함수 
function find(words, msg) {
  for (let i = msg.length; i > 0; i--) {
      const sub_msg = msg.slice(0, i);

      if (sub_msg in words) {
          return [sub_msg, i];
      }
  }
}

// LZW 압축 알고리즘 
function LZW(msg, index=[]) {
  // 사전 초기화 
  const dict = {};
  let dictSize = 27;
  
  for (let i = 0; i < dictSize; i++) {
      const char = String.fromCharCode(65 + i);
      dict[char] = i + 1;
  }
  
  while (msg.length > 0) {
      const [w, i] = find(dict, msg);

      // 인덱스 출력
      index.push(dict[w]);
      
      // 사전에 등록
      if (i < msg.length) {
          dict[w + msg[i]] = dictSize++;
      }
      
      // 입력 갱신
      msg = msg.slice(i);
  }
  
  return index;
}

function solution(msg) {
  return LZW(msg);
}