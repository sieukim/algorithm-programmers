# 사전에 포함되는 가장 긴 문자열 w를 찾는 함수 
def find(words, msg):
    for i in range(len(msg), 0, -1):
        if msg[:i] in words:
            return msg[:i], i
        
# LZW 압축 알고리즘 
def LZW(msg, index=[]):
    # 사전 초기화 {문자: 인덱스}
    words = {chr(65+i):i+1 for i in range(26)}   
    
    while len(msg) > 0:
        w, i = find(words, msg)

        # 인덱스 출력
        index.append(words[w])

        # 사전에 등록
        if i < len(msg):
            words[w+msg[i]] = len(words) + 1
        
        # 입력 생신
        msg = msg[i:]
        
    return index

def solution(msg):
    return LZW(msg)