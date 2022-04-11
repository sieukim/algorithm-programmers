# dp[i] = dp[k] (+, -, *, //) d[i - k] (0 < k < i), dp[i]를 구하는 함수
def getNumbers(dp, i):
    for k in range(1, i):
        for value1 in dp[k]:
            for value2 in dp[i - k]:
                # +, -, * 연산 결과
                result = [value1 + value2, value1 - value2, value1 * value2]
                # //
                if value2 != 0:
                    result.append(value1 // value2)
                # 음수 제거
                result = filter(lambda x: x >= 0, result)
                # dp[i]에 추가
                dp[i] = dp[i].union(set(result))

def solution(N, number):
    # dp[i]: N을 i번 사용해서 만들 수 있는 수 집합
    # dp[i] = dp[k] (+, -, *, //) d[i - k] (0 < k < i)
    dp = [set([0]), set([N])]

    for i in range(2, 9):
        # N이 i번 연속된 수 추가
        dp.append(set([N * int('1' * i)]))      
        # dp[i] = dp[k] (+, -, *, //) d[i - k] (0 < k < i)    
        getNumbers(dp, i)

    answer = -1

    for i in range(9):
        if number in dp[i]:
            answer = i
            break

    return answer