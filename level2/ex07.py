def solution(n):
    # 표현 방법의 수
    count = 0
    
    for i in range(1, n+1):
        # 연속된 자연수의 합
        sum = 0
        for j in range(i, n+1):
            # 합 갱신 
            sum += j    
            # 표현한 경우
            if sum == n:
                count += 1
                break
            # 표현 못 하는 경우
            if sum > n:
                break
    return count