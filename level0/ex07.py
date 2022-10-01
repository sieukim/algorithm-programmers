def solution(M, N):
    # 가로 -> 세로
    count1 = M-1+M*(N-1)
    # 세로 -> 가로
    count2 = N-1+N*(M-1)
    
    return min(count1, count2)