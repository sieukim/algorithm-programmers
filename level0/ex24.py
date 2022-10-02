def solution(chicken):
    coupon = chicken
    service = 0
    
    while coupon >= 10:
        div, mod = divmod(coupon, 10)
        coupon = div+mod
        service += div
    
    return service