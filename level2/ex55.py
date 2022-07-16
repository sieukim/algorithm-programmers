def solution(n):
    answer = 0
    
    while n > 0:
        # 홀수 => 1칸 점프
        if n % 2 == 1:
            n -= 1
            answer += 1
        # 짝수 => 순간 이동
        n //= 2
    
    return answer