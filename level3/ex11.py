def solution(sticker):    
    # 스티커 개수
    n = len(sticker)

    if n == 1:
        return sticker[0]
    if n == 2:
        return max(sticker[0], sticker[1])
    if n == 3:
        return max(sticker[0] + sticker[2], sticker[1])
    
    # 첫 번째 스티커를 뜯어냈다고 가정 
    dp1 = [0 for _ in range(n)]
    dp1[0] = sticker[0]
    dp1[1] = 0
    dp1[2] = sticker[0] + sticker[2]
    for i in range(3, n-1):
        dp1[i] = max(dp1[i-3]+sticker[i], dp1[i-2]+sticker[i], dp1[i-1])
    
    # 첫 번째 스티커를 안 뜯어냈다고 가정
    dp2 = [0 for _ in range(n)]
    dp2[0] = 0
    dp2[1] = sticker[1]
    dp2[2] = max(sticker[1], sticker[2])
    for i in range(3, n):
        dp2[i] = max(dp2[i-3]+sticker[i], dp2[i-2]+sticker[i], dp2[i-1])

    return max(dp1[-2], dp2[-1])