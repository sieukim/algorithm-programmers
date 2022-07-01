from itertools import permutations

# 해당 순서에서 탐험 가능한 던전 수를 반환하는 함수
def get_count(k, case):
    count = 0
    
    for [need, use] in case:
        if k >= need:
            k -= use
            count += 1
        else:
            break
    
    return count

def solution(k, dungeons):
    # 가능한 모든 순서
    cases = list(permutations(dungeons, len(dungeons)))
    # 모든 순서에 대한 탐험 가능한 던전 수 
    counts = [get_count(k, case) for case in cases]
    return max(counts)