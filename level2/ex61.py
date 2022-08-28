def solution(rows, columns, queries):
    # 테이블 초기화
    def init():
        table = [[0] * columns for i in range(rows)]
        
        for i in range(rows):
            for j in range(columns):
                table[i][j] = i * columns + j + 1
        
        return table
    
    # 시계방향 회전
    def rotate(x1, y1, x2, y2):
        # 가장 작은 수
        min_num = rows * columns
        
        # 기존 리스트
        top = table[x1][y1:y2+1]
        bottom = table[x2][y1:y2+1]
        left = [table[x][y1] for x in range(x1, x2+1)]
        right = [table[x][y2] for x in range(x1, x2+1)]

        # top
        for i in range(y1, y2):
            table[x1][i+1] = top[i-y1]
            min_num = min(min_num, top[i-y1])
        # bottom
        for i in reversed(range(y1+1, y2+1)):
            table[x2][i-1] = bottom[i-y2-1]
            min_num = min(min_num, bottom[i-y2-1])
        # left
        for i in reversed(range(x1+1, x2+1)):
            table[i-1][y1] = left[i-x2-1]
            min_num = min(min_num, left[i-x2-1])
        # right
        for i in range(x1, x2):
            table[i+1][y2] = right[i-x1]
            min_num = min(min_num, right[i-x1])
        
        return min_num
    
    # 테이블 초기화
    table = init()
    # 위치가 바뀐 숫자 리스트
    numbers = []

    for x1, y1, x2, y2 in queries:
        min_num = rotate(x1-1, y1-1, x2-1, y2-1)
        numbers.append(min_num)
    
    return numbers
    