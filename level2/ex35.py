def solution(arr):
    # 주어진 2차원 리스트 내 0과 1의 개수를 반환
    def get_count(n, arr):
        # 0과 1의 개수
        count = [0, 0]
        
        for i in range(n):
            for j in range(n):
                value = arr[i][j]
                count[value] += 1
        
        return count
    
    # 주어진 2차원 리스트 내 (i, j)부터 시작하여 크기가 m x m인 2차원 리스트를 반환
    def slice(arr, i, j, m):
        return [[arr[a][b] for b in range(j, j+m)] for a in range(i, i+m)]
    
    
    # 주어진 2차원 리스트를 4개로 나누어 압축을 시도
    def compress(arr):
        # 2차원 리스트의 크기
        n = len(arr)
        # 현재 0과 1의 개수
        count = get_count(n, arr)
        
        # 0 또는 1로만 이루어졌을 경우 
        for i in range(len(count)):
            if count[i] == n*n:
                answer[i] -= n*n-1
                return 

        # 4개로 나눴을 때 2차원 리스트의 크기
        m = n // 2
        # 4개로 나누어 압축을 시도
        compress(slice(arr, 0, 0, m))
        compress(slice(arr, 0, m, m))
        compress(slice(arr, m, 0, m))
        compress(slice(arr, m, m, m))

    n = len(arr)
    answer = get_count(n, arr)
    compress(arr)
    
    return answer