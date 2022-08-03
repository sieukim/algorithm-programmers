from collections import defaultdict, deque

def solution(n, vertex):
    def bfs(graph, x, q=deque()):
        level[x] = 0
        q.append(x)
        
        while q:
            y = q.popleft()
            for z in graph[y]:
                if level[z] == -1:
                    level[z] = level[y] + 1
                    q.append(z)
                    
    # {노드: [인접 노드]}
    graph = defaultdict(list)
    
    for a, b in vertex:
        graph[a].append(b)
        graph[b].append(a)
    
    # level[i]: 1번 노드부터 i번 노드까지 거리
    level = [-1 for _ in range(n+1)]
    
    bfs(graph, 1)
    
    # 가장 멀리 떨어진 노드 개수 반환
    return level.count(max(level))