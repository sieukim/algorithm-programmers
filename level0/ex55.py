def solution(n):
    # 합성수인지 확인
    def check(x):
        for i in range(2, int(x**0.5)+1):
            if x % i == 0:
                return True
        return False

    answer = 0
    
    for x in range(n+1):
        if check(x):
            answer += 1
    
    return answer
  