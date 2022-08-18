from collections import defaultdict, deque
from sys import maxsize

def solution(N, road, K):
    # 1번 마을 => i번 마을 최소 배달 시간
    times = [maxsize for _ in range(N+1)]
    
    # 마을 이동 시간 그래프
    graph = defaultdict(list)
    
    for a, b, time in road:
        graph[a].append((b, time))
        graph[b].append((a, time))
    
    # 1번 마을에 대해 초기화
    times[1] = 0
    q = deque([1])

    # bfs
    while q:
        a = q.popleft()
        for b, time in graph[a]:
            if times[b] > times[a] + time:
                times[b] = times[a] + time
                q.append(b)

    return len([time for time in times if time <= K])