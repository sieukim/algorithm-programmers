def solution(n):
    # k진법 변환 함수
    def convert(n, k):
        converted = ''
        
        while (n > 0):
            converted += str(n % k)
            n = int(n / k)
        
        return converted[::-1]
    
    # 3진법으로 변환
    ternary = convert(n, 3)
    # 거꾸로 뒤집어 10진법으로 변환
    return int(ternary[::-1], 3)