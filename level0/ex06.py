def solution(num, total):
    # 연속된 정수의 범위
    start, end = -(num-1), 0
    # 연속된 정수의 합 
    total_sum = sum(range(start, end+1))
    
    while total_sum < total:
        start += 1
        end += 1
        total_sum += num
    
    return list(range(start, end+1))