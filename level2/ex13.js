// 최종 닉네임 딕셔너리 반환 함수
function get_nickname(n, record) {
  // 닉네임 딕셔너리
  const nickname = {};
  
  for (let i = 0; i < n; i++) {
      // 종류 
      const command = record[i][0];
      
      // 퇴장인 경우
      if (command === 'Leave') {
          // 건너뜀
          continue;
      }
      
      // 아이디, 닉네임
      const user_id = record[i][1];
      const user_nickname = record[i][2];

      // 현재 사용자의 닉네임 변경
      nickname[user_id] = user_nickname;
  }

  return nickname
}

// 출력 메세지 리스트 반환 함수
function get_messages(n, record, nickname) {
  const messages = [];
  
  for (let i = 0; i < n; i++) {
      // 종류, 아이디
      const command = record[i][0];
      const id = record[i][1];
      
      // 입장인 경우
      if (command === 'Enter') {
          messages.push(`${nickname[id]}님이 들어왔습니다.`);
      }
      
      // 퇴장인 경우
      if (command === 'Leave') {
          messages.push(`${nickname[id]}님이 나갔습니다.`);
      }
  }
      
  return messages;
}
  
function solution(record) {
  // record 크기
  const n = record.length;
  // 각 문자열을 배열로 변환
  record = record.map(value => value.split(' '));
  
  // 닉네임 딕셔너리
  const nickname = get_nickname(n, record);
  // 출력 메세지 리스트
  const messages = get_messages(n, record, nickname);
  
  return messages
}