def solution(i, j, k):
    # 주어진 정수 n에 정수 k의 등장 횟수를 반환하는 함수
    def get_count(n, k):
        n, k = str(n), str(k)
        return n.count(k)
    
    return sum([get_count(n, k) for n in range(i, j+1)])
