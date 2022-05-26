def solution(A,B):
    n = len(A)
    answer = 0
    
    A.sort()
    B.sort(reverse=True)
    
    for i in range(n):
        answer += A[i] * B[i]
        
    return answer