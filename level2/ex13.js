function solution(records) {
  const answer = [];
  const dict = {};

  // 주어진 uid와 command를 가지고 문구로 변환하는 함수
  function comment(uid, command) {
    switch (command) {
      case 'Enter':
        return `${dict[uid].nickname}님이 들어왔습니다.`;
      case 'Leave':
        return `${dict[uid].nickname}님이 나갔습니다.`;
    }
  }

  for (let i = 0; i < records.length; i++) {
    // 주어진 기록을 공백을 기준으로 구분
    const record = records[i].split(' ');

    const command = record[0];
    const uid = record[1];
    const nickname = record[2];

    // 이미 존재하는 경우
    if (dict[uid]) {
      // 닉네임 변경이 필요한 경우(Change 또는 재입장)
      if (command !== 'Leave' && dict[uid].nickname !== nickname) {
        dict[uid] = {
          nickname: nickname,
        }
      }
    }
    // 존재하지 않는 경우
    else {
      dict[uid] = {
        nickname: nickname,
      };
    }

    if (command !== 'Change') {
      answer.push([uid, command]);
    }
  }

  return answer.map(value => comment(value[0], value[1]));
}