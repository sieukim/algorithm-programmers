def solution(lottos, win_nums):
    # 알아볼 수 없는 번호 개수
    unknown = lottos.count(0)
    # 일치하는 번호 개수
    matched = len(set(lottos) & set(win_nums))
    # 최고 등수
    high_rank = min(6, 7 - matched - unknown)
    # 최저 등수
    low_rank = min(6, 7 - matched)

    return [high_rank, low_rank]