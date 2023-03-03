def solution(cap, n, deliveries, pickups):
    # 편도 이동
    def move(cap, arr):
        while arr:
            if arr[-1] <= cap:
                value = arr.pop()
                cap -= value
            else:
                arr[-1] -= cap
                break

    # 의미없는 데이터 제거
    def clean(arr):
        while arr:
            if arr[-1] == 0:
                arr.pop()
            else:
                break

    distance = 0
    clean(deliveries)
    clean(pickups)

    while deliveries or pickups:
        # 왕복 거리 계산
        distance += 2 * max(len(deliveries), len(pickups))
        # 배달
        move(cap, deliveries)
        # 수거
        move(cap, pickups)

    return distance