import re

def solution(my_string):
    # 소문자를 기준으로 파싱
    pattern = r'[a-z]'
    tokens = re.split(pattern, my_string.lower())
    tokens = [int(token) for token in tokens if token != '']
    # 합을 반환
    return sum(tokens)