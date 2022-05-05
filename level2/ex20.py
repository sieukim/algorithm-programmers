def solution(n, k):
    # 10진수 정수를 k진수로 변환하는 함수
    def convert_base(n, k):
        # k진수 문자열
        n_k = ''
        
        while n > 0:
            mod = n % k
            n_k += str(mod)
            n = int(n / k)
            
        return n_k[::-1]

    # 소수 판별 함수
    def isprime(n):
        if n < 2:
            return False
        for i in range(2, int(n ** 0.5) + 1):
            if n % i == 0:
                return False
        return True
    
    # 조건에 맞는 소수의 개수
    count = 0
    
    # 10진수 n을 k진수로 변환한 결과 문자열
    n_k = convert_base(n, k)
    
    # 0을 기준으로 split한 결과 리스트
    numbers = n_k.split('0')
    
    for number in numbers:
        if number.isdigit() and isprime(int(number)):
            count += 1

    return count