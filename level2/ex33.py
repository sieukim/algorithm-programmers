def solution(n, left, right):    
    answer = []
    
    for i in range(left, right + 1):
        # 2차원 배열에서의 위치
        row, column = divmod(i, n)
        # 해당 위치의 값 추가
        answer.append(max(row, column) + 1)
    
    return answer