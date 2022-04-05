def solution(participant, completion):
    # 참가자 오름차순 정렬
    participant = sorted(participant)
    # 완주 선수 오름차순 정렬
    completion = sorted(completion)
    
    for i in range(len(completion)):
        if participant[i] != completion[i]:
            return participant[i]
        
    return participant[-1]