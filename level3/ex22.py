from itertools import accumulate

def solution(sequence):
    # 펄스 수열 초기화
    def init(sequence, start_value):
        return [value*start_value*pow(-1, i) for i, value in enumerate(sequence)]
    
    # 최대 누적합 찾기
    def find(cumsum):
        return max(abs(max(cumsum)), abs(min(cumsum)), max(cumsum)-min(cumsum))
    
    # 펄스 수열
    pulse_1 = init(sequence, 1)
    pulse_2 = init(sequence, -1)
    # 누적합
    cumsum_1 = list(accumulate(pulse_1))
    cumsum_2 = list(accumulate(pulse_2))
    # 최대 누적합 계산
    max_cumsum_1 = find(cumsum_1)
    max_cumsum_2 = find(cumsum_2)
    # 최대 누적합 반환
    return max(max_cumsum_1, max_cumsum_2)
    