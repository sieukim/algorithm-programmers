def solution(N, stages):
    # reached[i]: i번 스테이지 도달 사용자 수
    # reached[0] = 0, reached[N + 1] = 모든 스테이지 클리어한 사용자 수
    reached = [stages.count(i) for i in range(N + 2)]
    
    # failureRate[i]: i번 스테이지 실패율
    # failureRate[0], failureRate[N + 1]: 삭제
    failureRate = [reached[i] / sum(reached[i:]) if any(reached[i:]) else 0.0 for i in range(N + 2)][1: N + 1]
    
    # [스테이지 번호, 스테이지 실패율]로 매핑
    failureRate = [[i + 1, failureRate[i]] for i in range(N)]
    
    # i번 스테이지 실패율을 기준으로 내림차순 정렬
    failureRate.sort(key=lambda x: x[1], reverse=True)
    
    # 스테이지 번호 리스트 반환
    return [number for [number, rate] in failureRate]
    