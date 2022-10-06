def solution(numbers):
    # 오름차순 정렬
    numbers.sort()

    # 가장 낮은 두 수의 곱
    mult1 = numbers[0]*numbers[1]
    # 가장 높은 두 수의 곱
    mult2 = numbers[-1]*numbers[-2]
    
    return max(mult1, mult2)