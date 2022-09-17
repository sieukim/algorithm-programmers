def solution(s):
    # 주어진 문자열을 k개 단위로 잘라 리스트를 반환하는 함수
    def split(src, k):
        return [src[i:i+k] for i in range(0, len(src), k)]
    
    # 주어진 리스트를 압축하여 문자열을 반환하는 함수
    def compress(src):
        dest = ''
        count = 1
        
        for i in range(len(src)):
            # 연속하는 경우
            if i < len(src)-1 and src[i] == src[i+1]:
                count += 1
            # 연속이 끝난 경우
            elif count > 1:
                dest += str(count) + src[i]
                count = 1
            # 연속하지 않는 경우
            else:
                dest += src[i]
        
        return dest 
    
    # 문자열 길이 
    n = len(s)
    # 압축하여 표현한 문자열 중 가장 짧은 것의 길이
    answer = n
    
    for i in range(1, n+1):
        splitted = split(s, i)
        compressed = compress(splitted)
        answer = min(answer, len(compressed))
        
    return answer
    