def solution(a, b):
    # 최대공약수 계산 
    def gcd(x, y):
        while y:
            x, y = y, x % y
        return x

    # 약분 계산 
    def calc(denum, num):
        # 최대 공약수 
        x = gcd(denum, num)
        return [denum//x, num//x]
    
    # 주어진 수로 나누어 떨어질 때까지 계속
    # 나눌 때, 몫을 반환하는 함수
    def div(num, x):
        while num > 1:
            if num % x == 0:
                num //= x
            else:
                break
        return num
    
    # 2와 5로 이루어진 숫자인지 확인하는 함수
    def check(num):
        # 2로 나누기
        num = div(num, 2)
        # 5로 나누기
        num = div(num, 5)
        # 2와 5로 이루어진 경우 -> 몫 == 1
        if num == 1:
            return 1
        else:
            return 2
        
    # 기약분수의 분자와 분모
    denum, num = calc(a, b)
    return check(num)
    
    