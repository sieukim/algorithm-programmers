function solution(orders, courses) {
  // n개의 요소로 구성된 부분집합을 구하는 함수
  function subset(order, n) {
    const answer = [];

    // 부분집합을 구하는 dfs 함수
    function dfs(arr = [], index) {
      if (arr.length === n ) {
        answer.push(arr.join(''));
        return;
      }

      if (index === order.length) {
        return;
      }

      dfs([...arr, order[index]], index + 1);
      dfs([...arr], index + 1);
    }

    dfs([], 0);

    return answer;
  }

  const answer = [];

  // 각 주문을 알파벳을 기준으로 오름차순 정렬
  orders = orders.map(oder => oder.split('').sort().join(''));

  courses.forEach(course => {
    const combinations = {};

    // 각 주문에 대한 부분 메뉴 수 카운팅
    orders.forEach(order => {
      const subsets = subset(order, course);

      subsets.forEach(subset => {
        const keys = Object.keys(combinations);

        if (keys.includes(subset)) combinations[subset]++;
        else combinations[subset] = 1;
      });
    });

    const keys = Object.keys(combinations);
    const values = Object.values(combinations);

    // 조합이 나오지 않는 경우
    if (keys.length === 0) return;

    // 최다 주문 횟수
    const maxOrdered = values.reduce((a, b) => Math.max(a, b));

    // 2번 미만 주문된 조합밖에 없는 경우
    if (maxOrdered <= 1) return;

    // 최다 주문 조합 찾기
    keys.forEach(key => {
      if (combinations[key] === maxOrdered) answer.push(key);
    });
  });

  // 알파벳을 기준으로 오름차순 정렬
  return answer.sort();
}