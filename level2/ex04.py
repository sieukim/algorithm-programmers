def solution(n):
    arr = [0, 1]
    mod = 1234567
    
    for i in range(2, n+1):
        arr.append(arr[i-1] % mod + arr[i-2] % mod)
        
    return arr[n] % mod