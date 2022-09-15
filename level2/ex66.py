def solution(n, apeach, k=11):
    def dfs(n, i=0, lion=[0 for _ in range(k)]):
        # 모든 화살을 사용한 경우
        if n == 0:
            answer.append(lion)
            return 
        # 탐색 종료
        if i == k+1 or n < 0:
            return
        if i < k:
            # 라이언이 점수를 획득하는 경우
            dfs(n-(apeach[i]+1), i+1, [value if j != i else apeach[i]+1 for j, value in enumerate(lion)])
            # 라이언이 점수를 포기하는 경우
            dfs(n, i+1, [value for value in lion])
        else:
            dfs(0, i+1, [value for value in lion[:-1]+[n]])

    # 라이언과 어피치의 점수 차이를 반환하는 함수
    def result(lion, apeach):
        diff = 0

        for i in range(k):
            # 라이언 득점
            if lion[i] > 0:
                diff += k-i-1
            # 어피치 득점
            elif apeach[i] > 0:
                diff -= k-i-1

        return diff

    answer = []
    dfs(n)
    
    # 라이언 기록 => (라이언 기록, 어피치와의 점수 차이)
    answer = list(map(lambda lion: (lion, result(lion, apeach)), answer))
    # 최대 점수 차이
    max_diff = max(answer, key=lambda x: x[1])[1]
    # 라이언이 이길 수 없는 경우
    if max_diff <= 0:
        return [-1]
    # 최대 점수 차이를 갖는 기록만 필터링
    answer = [info[0] for info in filter(lambda x: x[1] == max_diff, answer)]
    # 가장 낮은 점수를 더 맞힌 경우
    answer = sorted(answer, key=lambda x: str(x[::-1]))[-1]
    return answer

solution(5, [2,1,1,1,0,0,0,0,0,0,0])