def solution(n):
    # n이 0인 경우
    if n == 0:
        return 0
    
    # 약수 리스트
    divisor = [i for i in range(1, n + 1) if n % i == 0]
    # 합
    divisorSum = sum(divisor)
    
    return divisorSum