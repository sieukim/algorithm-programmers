def solution(num):
    answer = -1
    
    def getCount(num, count):
        # 함수 바깥 answer 사용
        nonlocal answer
        # 1이 된 경우
        if (num == 1):
            # 정답 = 횟수
            answer = count
            print(answer, count)
            return
        # 500번 넘은 경우
        if (count == 500):
            # 정답 = -1
            answer = -1
            return
        # 짝수인 경우
        if (num % 2 == 0):
            num /= 2
        # 홀수인 경우
        else:
            num = num * 3 + 1
        # 재귀 호출
        getCount(num, count + 1)
        
    getCount(num, 0)
    return answer