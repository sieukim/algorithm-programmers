from collections import deque

def solution(rc, operations):
    def shiftRow(firstCol, centerCol, endCol):
        firstCol.rotate(1)
        centerCol.rotate(1)
        endCol.rotate(1)
        return firstCol, centerCol, endCol

    def rotate(firstCol, centerCol, endCol):
        centerCol[0].appendleft(firstCol.popleft())
        endCol.appendleft(centerCol[0].pop())
        centerCol[-1].append(endCol.pop())
        firstCol.append(centerCol[-1].popleft())
        return firstCol, centerCol, endCol

    # 행렬 크기
    n, m = len(rc), len(rc[0])

    # 첫 열
    firstCol = deque([rc[i][0] for i in range(n)])
    # 중간 열
    centerCol = deque([deque(rc[i][1:-1]) for i in range(n)])
    # 끝 열
    endCol = deque([rc[i][-1] for i in range(n)])

    for op in operations:
        if op[0] == 'S':
            firstCol, centerCol, endCol = shiftRow(firstCol, centerCol, endCol)
        elif op[0] == 'R':
            firstCol, centerCol, endCol = rotate(firstCol, centerCol, endCol)

    # 행렬 재구성 
    for i in range(n):
        rc[i][0] = firstCol[i]
        for j in range(1, m-1):
            rc[i][j] = centerCol[i][j-1]
        rc[i][-1] = endCol[i]
        
    return rc