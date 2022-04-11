def solution(s, n):
    # n칸 미룬 문자열에 대한 리스트
    answer = []
    
    for char in s:
        # 공백 문자인 경우
        if char == ' ':
            # 공백 추가
            answer.append(' ')
            # 건너뜀
            continue
        # 대문자인 경우
        if char.isupper():
            # n칸 미뤘을 때 문자에 대한 아스키 코드
            code = ord(char) + n
            # 대문자 아스키 범위를 넘은 경우
            if code > ord('Z'):
                code -= 26
            # 문자로 바꿔 추가
            answer.append(chr(code))
        # 소문자인 경우
        else:
            # n칸 미뤘을 때 문자에 대한 아스키 코드
            code = ord(char) + n
            # 소문자 아스키 범위를 넘은 경우
            if code > ord('z'):
                code -= 26
            # 문자로 바꿔 추가
            answer.append(chr(code))
        
    
    # 문자열로 변환하여 반환
    return "".join(answer)