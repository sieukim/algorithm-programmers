def solution(denum1, num1, denum2, num2):
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
    
    # 분자와 분모
    denum = denum1*num2+denum2*num1
    num = num1*num2
    return calc(denum, num)
