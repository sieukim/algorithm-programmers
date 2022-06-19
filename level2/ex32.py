from math import ceil

def solution(n, words):
    answer = []
    
    for i in range(1, len(words)):
        # 이전 단어, 현재 단어
        prev, curr = words[i-1], words[i]
        # 탈락 
        if curr in words[:i] or prev[-1] != curr[0]:
            answer.append(i % n + 1)
            answer.append(ceil((i + 1) / n))
            break
    
    # 탈락자가 없는 경우
    if len(answer) == 0:
        answer = [0, 0]
    
    return answer
    
