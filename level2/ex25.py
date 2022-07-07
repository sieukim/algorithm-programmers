from itertools import combinations

# 각 조합의 주문 횟수를 반환하는 함수 
def get_count(orders, n):
    combs = []
    
    for order in orders:
        combs += list(combinations(order, n))
    
    combs = ["".join(comb) for comb in combs]
    
    return {comb: combs.count(comb) for comb in combs if combs.count(comb) >= 2}

# 최다 주문 조합 반환 함수
def get_max(orders, n):
    count = get_count(orders, n)
    
    if len(count) > 0:
        max_count = max(count.values())
        return [comb for comb in count if count[comb] == max_count]
    else:
        return []
    
def solution(orders, course):
    # 조합
    answer = []

    # 정렬
    orders = [sorted(order) for order in orders]
    
    for n in course:
        answer += get_max(orders, n)
    
    # 정렬
    answer.sort()
    
    return answer