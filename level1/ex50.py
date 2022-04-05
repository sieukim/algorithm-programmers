def solution(price, money, count):
    # 요금 리스트
    prices = [price * i for i in range(1, count + 1)]
    # 요금 합
    totalPrice = sum(prices)
    return totalPrice - money if totalPrice > money else 0