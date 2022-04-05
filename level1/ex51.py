def solution(sizes):
    # [가로 길이, 세로 길이]를 오름차순 정렬
    sizes = list(map(lambda x: sorted(x), sizes))
    # 최대 가로 길이
    maxWidth = max(size[0] for size in sizes)
    # 최대 세로 길이
    maxHeight = max(size[1] for size in sizes)
    return maxWidth * maxHeight