def solution(s):
    return "".join([c for c in sorted(set(s)) if s.count(c) == 1])
    