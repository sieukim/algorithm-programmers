function solution(id_list, report, k) {
  const answer = [];

  /*
      사용자 정보를 담은 배열
      [사용자 아이디: {
      reporting: [],    // 사용자가 신고한 사용자 배열
      bannedUser: [],   // 사용자가 신고하여 정지된 사용자 배열
      reported: [],     // 사용자를 신고한 사용자 배열
      reportedCount: [],// 사용자가 신고당한 횟수
      }]
  */

  const users = [];

  // 초기화
  for (let i = 0; i < id_list.length; i++) {
    users[id_list[i]] = {
      reporting: [],
      bannedUser: [],
      reported: [],
      reportedCount: 0
    };
  }

  // report 파싱
  for (let i = 0; i < report.length; i++) {
    const reporting = report[i].split(" ")[0];
    const reported = report[i].split(" ")[1];

    users[reporting].reporting.push(reported);
    users[reported].reported.push(reporting);
  }

  // reported 중복 제거, reportedCount 구하기
  for (let i = 0; i < id_list.length; i++) {
    const user = id_list[i];

    users[user].reported = [...new Set(users[user].reported)];
    users[user].reportedCount = users[user].reported.length;
  }

  // bannedUser 구하기
  for (let i = 0; i < id_list.length; i++) {
    const user = id_list[i];
    const reported = users[user].reported;
    const reportedCount = users[user].reportedCount;

    // 기준 횟수 이상 신고된 경우
    if (reportedCount >= k) {
      for (let j = 0; j < reported.length; j++) {
        users[reported[j]].bannedUser.push(user);
      }
    }
  }

  // 사용자별 받은 처리 결과 메일 횟수 구하기
  for (let i = 0; i < id_list.length; i++) {
    const user = id_list[i];

    answer.push(users[user].bannedUser.length);
  }

  return answer;
}