from collections import defaultdict, deque

def solution(begin, target, words):
    # 두 단어 간 차이 반환
    def get_diff(word1, word2):
        return sum([1 for i in range(len(word1)) if word1[i] != word2[i]])
    
    # 그래프 초기화
    def init(words):
        graph = defaultdict(list)
        
        for i in range(len(words)):
            for j in range(i+1, len(words)):
                word1, word2 = words[i], words[j]
                diff = get_diff(word1, word2)
                if diff == 1:
                    graph[word1].append(word2)
                    graph[word2].append(word1)
        
        return graph
    
    # 그래프 탐색
    def bfs(graph, begin, target):
        q = deque([(begin, 1)])
        visited = [begin]
        
        while q:
            node1, count = q.popleft()
            for node2 in graph[node1]:
                if node2 == target:
                    return count
                if node2 not in visited:
                    q.append((node2, count+1))
                    visited.append(node2)
            
        return 0
    
    graph = init(words+[begin])
    count = bfs(graph, begin, target)
    
    return count
    