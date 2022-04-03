def solution(s):
    # 소문자 문자열로 변환
    s = s.lower()
    # p의 개수
    p_count = s.count('p')
    # y의 개수
    y_count = s.count('y')
    
    return p_count == y_count