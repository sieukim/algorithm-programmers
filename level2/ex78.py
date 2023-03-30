from functools import cmp_to_key, reduce

def solution(data, col, row_begin, row_end):
    # col 번째 컬럼을 기준으로 오름차순 정렬
    # 동일한 경우 첫 번째 컬럼을 기준으로
    # 내림차순 정렬
    def sort(data, col):
        def compare(x, y):
            if x[col] == y[col]:
                return y[0]-x[0]
            else:
                return x[col]-y[col]
        return sorted(data, key=cmp_to_key(compare))
    
    # S[i]: i번째 행의 튜플에 대해 각 컬럼의 값을 i로 나눈 나머지들의 합
    def get_sum(data, i):
        return sum([num%i for num in data[i-1]])
    
    data = data
    data = sort(data, col-1)
    sums = [get_sum(data, i) for i in range(row_begin, row_end+1)]
    return reduce(lambda acc, value: acc^value, sums)
    