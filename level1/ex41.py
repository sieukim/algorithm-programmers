def solution(s):
    answer = ''
    
    # 중간 인덱스
    centerIndex = len(s) // 2
    
    # 단어의 길이가 짝수인 경우
    if len(s) % 2 == 0:
        answer += s[centerIndex - 1] + s[centerIndex]
    # 단어의 길이가 홀수인 경우
    else:
        answer += s[centerIndex]
    
    return answer