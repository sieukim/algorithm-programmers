def solution(n, computers):
    def find(parent, x):
        if parent[x] != x:
            parent[x] = find(parent, parent[x])
        return parent[x]
    
    def union(parent, x, y):
        x, y = find(parent, x), find(parent, y)
        if x < y:
            parent[y] = x
        else:
            parent[x] = y
            
    network = [i for i in range(n)]
            
    for i in range(n):
        for j in range(n):
            if computers[i][j] == 1:
                union(network, i, j)
    
    group = set()
    
    for i in range(n):
        group.add(find(network, i))
    
    return len(group)