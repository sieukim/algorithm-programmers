from itertools import accumulate

def solution(elements):
    # 길이가 x인 연속 부분 수열로부터 나올 수 있는 합 리스트 
    def calculate(cumsum, x):
        return [cumsum[i+x]-cumsum[i] for i in range(len(cumsum)-x)]
    
    # 누적합 
    cumsum = list(accumulate(elements+elements))
    # 부분 수열의 합
    subsum = set(sum([calculate(cumsum, i) for i in range(1, len(elements)+1)], []))
    
    return len(subsum)
    