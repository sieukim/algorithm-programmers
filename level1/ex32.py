def solution(list1, list2):
    # n x m 행렬
    n = len(list1)
    m = len(list1[0])
    # 행렬 덧셈 리스트, 0으로 초기화된 n x m 리스트 
    sumList = [[0 for column in range(m)] for row in range(n)]
    # 행렬 덧셈
    for i in range(n):
        for j in range(m):
            sumList[i][j] = list1[i][j] + list2[i][j]
    
    return sumList