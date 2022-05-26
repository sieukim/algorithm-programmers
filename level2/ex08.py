def solution(n):
    # 2진수로 변환하고, 1의 개수를 반환하는 함수
    def get_count(num):
        return str(bin(num)).count('1')
    
    answer = -1
    
    for i in range(n+1, 1000000):
        # 1의 개수가 같은 경우
        if get_count(n) == get_count(i):
            answer = i
            # 종료
            break
    
    return answer