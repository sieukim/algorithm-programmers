def solution(n):
    # 소수 판별 함수
    def is_prime(x):
        if x <= 1:
            return False
        if x <= 3:
            return True
        for y in range(2, int(x**0.5)+1):
            if x % y == 0:
                return False
        return True
    
    # 소인수분해 계산
    def calc(x):
        if is_prime(x):
            nums.append(x)
            return 
        
        for y in range(2, x+1):
            div, mod = divmod(x, y)
            if mod == 0:
                calc(y)
                calc(div)
                break
                
    # 소인수 리스트
    nums = []
    # 소인수분해 계산
    calc(n)
    # 소인수 반환
    return sorted(set(nums))
    
        