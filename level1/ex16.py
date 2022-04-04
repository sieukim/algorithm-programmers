def solution(left, right):
    # 약수 구하는 함수
    def getDivisor(n):
        divisor = [1, n]
        
        for i in range(1, int(n / 2) + 1):
            if (n % i == 0):
                divisor.append(i)
                divisor.append(n // i)
                
        return set(divisor)
        
    answer = 0
    
    for i in range(left, right + 1):
        # 약수 set
        divisor = getDivisor(i)
        # 홀수개인 경우
        if (len(divisor) % 2):
            answer -= i
        # 짝수개인 경우
        else:
            answer += i
            
    return answer