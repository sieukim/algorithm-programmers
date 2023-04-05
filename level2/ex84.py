def solution(k, ranges):
    # 우박 수열
    # key: x좌표(수열 순서)
    # value: y좌표(수열 값)
    def collatz(k, seq={}, i=0):
        seq[i] = k 
        if k == 1:
            return seq
        k = 3*k+1 if k%2 else k/2
        return collatz(k, seq, i+1)

    # [a, b] 구간의 넓이
    def get_area(seq, a, b):
        return -1 if a > b else sum([(seq[x]+seq[x+1])/2 for x in range(a, b)])
    
    seq = collatz(k)
    ranges = [(a, max(seq.keys())+b) for a, b in ranges]
    return [get_area(seq, a, b) for a, b in ranges]
        