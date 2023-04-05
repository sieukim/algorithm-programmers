from collections import deque

def solution(x, y, n):
    # 두 수가 같은 경우
    if x == y:
        return 0
    # 사용할 수 있는 연산 종류
    op1 = lambda x: x+n
    op2 = lambda x: x*2
    op3 = lambda x: x*3
    ops = [op1, op2, op3]
    # bfs
    q = deque([(x, 0)])
    visited = set([])
    
    while q:
        x, count = q.popleft()
        for op in ops:
            nx = op(x)
            if nx in visited:
                continue
            if nx > y:
                continue
            if nx == y:
                return count+1
            q.append((nx, count+1))
            visited.add(nx)

    return -1
