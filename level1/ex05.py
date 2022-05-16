def solution(board, moves):
    # board 크기 
    n = len(board)
    
    # 열 정보
    columns = [[row[i] for row in board if row[i] != 0] for i in range(n)]
    
    # 바구니 정보
    bucket = []
    
    # 사라진 인형의 개수
    count = 0
    
    for move in moves:
        # 인형이 없는 경우
        if len(columns[move-1]) == 0:
            # 건너뜀
            continue
        
        # 최상단 인형 선택
        selected = columns[move-1].pop(0)
        
        # 같은 인형이 들어가는 경우
        if bucket and bucket[-1] == selected:
            # 마지막 인형 제거
            bucket.pop()
            # 사라진 인형 개수 추가
            count += 2
        # 다른 인형이 들어가는 경우
        else:
            # 바구니에 추가
            bucket.append(selected)
        
    return count