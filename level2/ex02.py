from functools import reduce

def solution(s):
    # 문자열 길이 
    n = len(s)
    
    # 정답 문자열
    answer = ""
    
    # 공백 위치 리스트
    spaces = [i for i in range(n) if s[i] == ' ']
    
    # 대문자 변환 여부
    isCapital = True
    
    for i in range(n):
        # 공백인 경우 
        if i in spaces:
            answer += " "
            isCapital = True 
        # 숫자인 경우
        elif s[i].isdigit():
            answer += s[i]
            isCapital = False 
        # 첫 글자인 경우
        elif isCapital:
            answer += s[i].upper()
            isCapital = False
        # 중간 글자인 경우
        else:
            answer += s[i].lower()
        
    return answer