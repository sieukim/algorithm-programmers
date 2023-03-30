from collections import Counter

def solution(want, number, discount):
    # 가능 여부 확인
    def check(want, number, discount):
        discount = Counter(discount)
        
        for i, item in enumerate(want):
            if number[i] != discount[item]:
                return False
            
        return True
        
    # 가능한 날짜 수
    return sum([check(want, number, discount[i:i+10]) for i in range(len(discount))])
