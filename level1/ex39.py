def solution(arr, divisor):
    return sorted([arr[i] for i in range(len(arr)) if arr[i] % divisor == 0]) or [-1]