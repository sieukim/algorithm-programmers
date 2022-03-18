function solution(n, vertex) {
  // 주어진 간선 배열 정보를 이용하여 노드 객체 초기화하고 반환하는 함수
  function getNodes(n, vertex) {
    // 노드 객체 선언
    const nodes = {};

    // 노드 객체 초기화 ({노드 번호: [인접 노드 배열]} 형태)
    for (let i = 1; i <= n; i++) {
      nodes[i] = [];
    }

    // 각 노드의 인접 노드 배열 초기화
    for (const v of vertex) {
      const [node1, node2] = v;

      nodes[node1].push(node2);
      nodes[node2].push(node1);
    }

    return nodes;
  }

  // 주어진 노드 객체 정보를 이용하여 각 노드의 level 정보를 담은 배열과 최대 level을 반환하는 함수
  function getLevels(n, nodes) {
    // queue 초기화
    const queue = [];
    // 노드 방문 여부 정보를 담은 배열
    // visited[i] = -1 && 방문하지 않은 경우
    // visited[i] = i번 노드의 레벨 && 방문한 경우
    let visited = new Array(n + 1).fill(-1);

    // 1번 노드에 대한 초기화
    queue.push(1);
    visited[1] = 1;

    // 노드 객체에 대한 bfs
    while (queue.length > 0) {
      // 현재 노드
      const currentNode = queue.shift();
      // 현재 노드의 인접 배열
      const arr = nodes[currentNode];

      // 인접 배열 탐색
      arr.forEach(node => {
        // 방문하지 않은 경우
        if (visited[node] < 0) {
          // queue에 추가
          queue.push(node);
          // 해당 노드의 레벨 갱신
          visited[node] = visited[currentNode] + 1;
        }
      });
    }

    return [visited, visited.reduce((a, b) => Math.max(a, b))];
  }

  // 노드 객체 초기화
  const nodes = getNodes(n, vertex);
  // level 배열 초기화
  const [levels, maxLevel] = getLevels(n, nodes);

  // 최대 level 노드 개수
  let count = 0;

  levels.forEach(level => {
    if (level === maxLevel) count++;
  });

  return count;
}