def solution(balls, share):
    # 팩토리얼 계산 함수
    def fact(x):
        result = 1
        
        for i in range(2, x+1):
            result *= i
        
        return result
    
    return fact(balls) // (fact(balls-share) * fact(share))
