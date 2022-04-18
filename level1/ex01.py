def solution(lottos, win_nums):
    # 0의  개수
    zero_count = lottos.count(0)
    # 정답 개수
    win_count = len([lotto for lotto in lottos if lotto in win_nums])

    # 최대 정답 개수 (0이 모두 정답인 경우)
    max_count = win_count + zero_count
    # 최소 정답 개수 (0이 모두 오답인 경우)
    min_count = win_count
    
    # 최고 순위
    max_rank = 7 - max_count if max_count >= 2 else 6
    # 최저 순위
    min_rank = 7 - min_count if min_count >= 2 else 6

    return [max_rank, min_rank]