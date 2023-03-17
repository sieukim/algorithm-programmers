from collections import defaultdict, deque

def solution(n, roads, sources, destination):
    # 그래프 초기화 
    def init_graph(roads):
        graph = defaultdict(list)
        
        for a, b in roads:
            graph[a].append(b)
            graph[b].append(a)
            
        return graph
    
    # 최단 경로 리스트 초기화
    def init_path(n, graph, destination):
        path = [-1]*(n+1)
        path[destination] = 0
        q = deque([(destination, 1)])
        
        while q:
            curr, count = q.popleft()
            for next in graph[curr]:
                if path[next] == -1:
                    q.append((next, count+1))
                    path[next] = count
        
        return path
                
    graph = init_graph(roads)
    path = init_path(n, graph, destination)
    return [path[source] for source in sources]