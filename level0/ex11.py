def solution(numbers, k):
    # 공 던지기 연산, 받은 학생 번호를 반환
    throw = lambda x: (x+2)%len(numbers)

    # 공을 던지는 사람의 인덱스
    i = 0
    
    for _ in range(k-1):
        i = throw(i)
        
    return numbers[i]