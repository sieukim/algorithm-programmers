function solution(n, vertex) {
  // {노드: [인접 노드]}
  const graph = {};
  
  for (let i = 0; i < vertex.length; i++) {
      const [a, b] = vertex[i];
      if (graph[a]) graph[a].push(b);
      else graph[a] = [b];
      if (graph[b]) graph[b].push(a);
      else graph[b] = [a];
  }
  
  function bfs(x, q=[], level=Array(n+1).fill(-1)) {
      q.push(x);
      level[x] = 0;
      
      while (q.length > 0) {
          const y = q.shift();
          for (const z of graph[y]) {
              if (level[z] === -1) {
                  q.push(z);
                  level[z] = level[y] + 1;
              }
          }
      }
      
      return level;
  }
  
  // level[i]: 1번 노드부터 i번 노드까지 거리
  const level = bfs(1);
  
  // 가장 멀리 떨어진 노드의 개수 반환
  const max_level = level.reduce((a, b) => Math.max(a, b));
  return level.filter(v => v === max_level).length;
}