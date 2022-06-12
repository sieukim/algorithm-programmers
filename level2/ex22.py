def solution(citations):
    answer = -1
    
    # 인용횟수를 기준으로 내림차순 정렬
    citations.sort(reverse=True)
    
    for h in range(citations[0], -1, -1):
        # h번 이상 인용된 논문 수
        count = len([value for value in citations if value >= h])
        # h번 이상 인용된 논문이 h편 이상인 경우
        if count >= h:
            answer = h
            break
    
    return answer