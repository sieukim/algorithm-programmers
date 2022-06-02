def solution(arr1, arr2):
    # 결과 행렬의 크기 n x m
    n, m = len(arr1), len(arr2[0])
    # 결과 행렬
    result = [[0] * m for i in range(n)]
    
    for i in range(n):
        for j in range(m):
            # arr1의 i번째 행, 크기 k
            x = arr1[i]
            # arr2의 j번째 열, 크기 k
            y = [row[j] for row in arr2]     
            # result[i][j]: x와 y의 각 요소의 곱을 합한 값
            result[i][j] = sum([value1 * value2 for value1, value2 in zip(x, y)])
            
    return result
            