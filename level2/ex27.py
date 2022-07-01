# 진법 변환 함수
def change_base(n, base):
    # 0일 때 
    if n == 0:
        return '0'
    
    # 진법 변환 결과
    result = ''
    # 진법 변환에 사용하는 문자 (0 ~ 10, A ~ F)
    char = [str(i) for i in range(0, 10)] + [chr(i) for i in range(65, 71)]
    
    # 진법 변환
    while n > 0:
        result += char[n % base]
        n //= base
    
    return result[::-1]

# t회차까지의 모든 숫자를 반환하는 함수
def get_total(base, t, m):
    total = ''
    n = 0
    
    while len(total) <= t * m:
        total += change_base(n, base)
        n += 1
        
    return total 

# 진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p
def solution(base, t, m, p):
    # t회차까지의 모든 숫자
    total = get_total(base, t, m)
    # 튜브가 필요한 숫자 
    return total[p-1:t*m:m]