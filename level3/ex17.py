from collections import defaultdict

def solution(tickets):
    # 그래프 초기화 함수
    def init(arr):
        graph = defaultdict(list)
        for a, b in arr:
            graph[a].append(b)
        return graph
    
    # 그래프 정렬 함수
    def sort(graph):
        for key in list(graph):
            graph[key].sort()
        return graph

    # 종료 조건
    def isEnd():
        return sum([len(value) for value in graph.values()]) == 0
    
    def dfs(airport_from='ICN', visited=['ICN']):
        # 종료 조건: 모든 경로를 거친 경우 
        if isEnd():
            answer.append(visited)
            return 

        n = len(graph[airport_from])

        while graph[airport_from]:
            airport_to = graph[airport_from].pop(0)
            dfs(airport_to, visited+[airport_to])
            graph[airport_from].append(airport_to)
            n -= 1
            if n == 0:
                break

    graph = init(tickets)  
    graph = sort(graph)
    answer = []
    dfs()
    return answer[0]