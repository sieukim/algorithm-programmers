def solution(n, s):
    # 자연수 n개의 합 = s >= n
    if s < n:
        return [-1]
    
    # s // n 값으로 초기화
    answer = [s // n for _ in range(n)]
    # s - 현재 원소의 합
    s = s - sum(answer)
    
    for i in range(s):
        answer[i] += 1
    
    # 오름차순 정렬
    answer.sort()
        
    return answer