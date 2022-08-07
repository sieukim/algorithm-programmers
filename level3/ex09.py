from heapq import heapify, heappop, heappush

def solution(scoville, K):
    answer = 0
    
    # make heapq
    heapify(scoville)

    # K 미만 스코빌 지수 개수
    count = len([v for v in scoville if v < K])
    
    if count == 0:
        return 0

    while count > 0:
        # 최저 스코빌 지수 2개 
        if len(scoville) >= 2:
            val_1 = heappop(scoville)
            val_2 = heappop(scoville)
        else:
            return -1 
        # 새로운 스코빌 지수 
        val_new = val_1 + val_2 * 2
        # 리스트에 삽입 
        heappush(scoville, val_new)
        
        # 새로운 스코빌 지수가 K 미만일 때
        if val_new < K:
            # 기존 스코빌 지수가 모두 K 미만인 경우
            if val_2 < K:
                # 2개 -> 1개 
                count -= 1
            # 하나 스코빌 지수만 K 미만인 경우
            # 1개 -> 1개
        # 새로운 스코빌 지수가 K 이상일 때
        else:
            # 기존 스코빌 지수가 모두 K 미만인 경우
            if val_2 < K:
                # 2개 -> 0개 
                count -= 2
            # 하나 스코빌 지수만 K 미만인 경우
            elif val_1 < K:
                # 1개 -> 0개
                count -= 1
        answer += 1
            
    return answer
    