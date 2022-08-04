def solution(A, B):
    # B팀의 승점
    answer = 0
    
    # 오름차순 정렬
    A.sort()
    B.sort()
    
    for score_a in A:
        for score_b in B:
            if score_a < score_b:
                answer += 1
                B.remove(score_b)
                break
    
    return answer 