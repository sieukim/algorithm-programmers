def solution(users, emoticons):
    # 1. 10/20/30/40 할인을 적용했을 때 가능한 모든 가격 리스트 구하기
    total_prices = []

    def find_prices(emoticons, i=0, prices=[]):
        if i == len(emoticons):
            return total_prices.append(prices)

        for discount_rate in [0, 10, 20, 30, 40]:
            discount_price = emoticons[i]*(100-discount_rate)/100
            new_prices = prices+[[discount_rate, discount_price]]
            find_prices(emoticons, i+1, new_prices)

    find_prices(emoticons)

    # 2. 각 가격 리스트마다 서비스 가입자 수와 이모티콘 판매액 계산하기
    def calculate(users, prices):
        count, amount = 0, 0

        for standard_rate, standard_price in users:
            # 구매 금액 계산
            price = sum([discount_price for discount_rate, discount_price in prices if discount_rate >= standard_rate])
            # 기준 금액 이상인 경우
            if price >= standard_price:
                count += 1
            # 기준 금액 미만인 경우
            else:
                amount += price

        return count, amount

    result = [calculate(users, prices) for prices in total_prices]

    # 3. 우선순위에 따라 정렬하기
    result.sort(reverse=True)

    return result[0]