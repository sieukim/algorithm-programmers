from functools import cmp_to_key

# 장르: [(고유 번호, 재생 시간)]
def get_info(n, genres, plays):
    info = {genre: [] for genre in genres}
    
    for i in range(n):
        info[genres[i]].append((i, plays[i]))
    
    return list(info.values())

# 정렬 기준 함수
def cmp1(x, y):
    total_plays_x = sum([value[1] for value in x])
    total_plays_y = sum([value[1] for value in y])
    return total_plays_y - total_plays_x

def cmp2(x, y):
    if x[1] != y[1]:
        return y[1] - x[1]
    else:
        return x[0] - y[0]

def solution(genres, plays):
    n = len(genres)
    info = get_info(n, genres, plays)
    info.sort(key=cmp_to_key(cmp1))
    info = [sorted(value, key=cmp_to_key(cmp2))[:2] for value in info]
    info = [item[0] for value in info for item in value]
    return info