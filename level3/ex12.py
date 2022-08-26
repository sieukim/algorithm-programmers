from collections import defaultdict

def solution(enroll, referral, seller, amount):
    # 이름: {추천인, 판매 금액}
    info = defaultdict(dict)
    
    for index, name in enumerate(enroll):
        info[name]['referral'] = referral[index]
        info[name]['amount'] = 0
    
    for index, name in enumerate(seller):
        rest_amount = amount[index] * 100

        while name != '-':
            next_amount = int(rest_amount*0.1)
            current_amount = rest_amount - next_amount
            
            if next_amount < 1:
                info[name]['amount'] += rest_amount
                break
            else:
                info[name]['amount'] += current_amount
                name = info[name]['referral']
                rest_amount = next_amount
    
    return [info[name]['amount'] for name in info]