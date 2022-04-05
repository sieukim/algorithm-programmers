def solution(depts, budget):
    # 신청 금액 오름차순 정렬
    depts = sorted(depts)
    
    # 최대 지원 가능 수
    count = 0

    for dept in depts:
        # 지원 가능한 경우
        if budget - dept >= 0:
            count += 1
            budget -= dept
        # 지원 불가능한 경우    
        else:
            break
            
    return count