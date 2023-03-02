def solution(n):
    # 배치 방법의 수
    answer = 0

    # 대각선 배치 판단 함수
    def has_diagonal(visited, current_col):
        current_row = len(visited)
        diff = [abs(current_row-prev_row)-abs(current_col-prev_col) for prev_row, prev_col in enumerate(visited)]
        return 0 in diff

    # 배치 방법 탐색 함수
    def find(n, board, i=0, visited=[]):
        # 현재 위치에 배치
        current_board = [value for value in board]
        current_board[i] = True
        current_visited = [value for value in visited]
        current_visited.append(i)

        # 모두 배치한 경우
        if len(current_visited) == n:
            nonlocal answer
            answer += 1
            return

        # 다음 위치로 이동
        for j in range(n):
            # 현재 위치인 경우
            if i == j:
                continue
            # 이미 배치한 경우
            if current_board[j]:
                continue
            # 대각선에 배치한 경우
            if has_diagonal(current_visited, j):
                continue
            # 재귀 호출
            find(n, current_board, j, current_visited)

    for i in range(n):
        find(n, [False]*n, i, [])

    return answer