from itertools import combinations

def solution(relation):
    # 유일성 판단
    def unique(relation, keys):
        tuples = [tuple([row[key] for key in keys]) for row in relation]
        return len(tuples) == len(set(tuples))
    
    # 최소성 판단
    def minimal(candidate_keys, keys):
        for candidate_key in candidate_keys:
            if all([key in keys for key in candidate_key]):
                return False
        return True
    
    # 키의 개수
    n = len(relation[0])
    # 키 리스트
    keys = [i for i in range(n)]
    # 후보키 리스트
    candidate_keys = []
    
    for i in range(n):
        # 키 조합
        combs = combinations(keys, i+1)
        # 유일성과 최소성 확인
        candidate_keys += [comb for comb in combs if unique(relation, comb) and minimal(candidate_keys, comb)]
    
    return len(candidate_keys)