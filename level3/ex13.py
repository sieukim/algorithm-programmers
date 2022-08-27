from re import compile
from itertools import product

def solution(user_id, banned_id):    
    # 문자열 -> 정규 표현식
    def convert(src, dest=''):
        return "".join(['[a-z0-9]' if char == '*' else char for char in src])

    # 정규 표현식에 맞는 아이디 목록
    matched_id = []
    
    for bid in banned_id:
        pattern = compile(convert(bid))
        matched = set()
        for uid in user_id:
            if pattern.fullmatch(uid):
                matched.add(uid)
        matched_id.append(matched)

    # 가능한 조합 목록
    combs = list(product(*matched_id))
    combs = [",".join(sorted(comb)) for comb in combs if len(comb) == len(set(comb))]
    
    return len(set(combs))
