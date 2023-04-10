def solution(seq, k):
    # 연속 부분 수열 구간 리스트
    min_range = [0, len(seq)-1]
    # 연속 부분 수열의 시작과 끝 인덱스
    start, end = 0, 0
    # 연속 부분 수열의 합
    seq_sum = seq[start]

    # 투포인터 활용
    while True:
        # 연속 부분 수열의 합 비교
        if seq_sum == k:
            if min_range[1]-min_range[0] > end-start:
                min_range = [start, end]
        # 연속 부분 수열의 구간 갱신
        if seq_sum > k:
            seq_sum -= seq[start]
            start += 1
            if start == len(seq):
                break
        else:
            end += 1
            if end == len(seq):
                break
            seq_sum += seq[end]
        
    return min_range