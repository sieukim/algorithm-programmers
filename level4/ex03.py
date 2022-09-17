from collections import defaultdict

def solution(words, queries, prefix=0, suffix=1):
    # 쿼리 -> 와일드카드 문자열의 위치, 알파벳 문자열, 와일드카드 문자열
    def split(query): 
        # 와일드카드 개수
        n = query.count('?') 
        # 와일드카드 문자열의 위치
        type = suffix if query[-1] == '?' else prefix 
        # 알파벳 문자열
        alphabet = query[n:] if type == prefix else query[:-n] 
        # 와일드카드 문자열
        wildcard = query[:n] if type == prefix else query[-n:] 
        # 정보 반환
        return type, alphabet, wildcard
        
    # 쿼리와 일치하는 단어의 개수를 반환하는 함수
    def match(words, query, count=0):
        # 와일드카드 문자열의 위치, 알파벳 문자열, 와일드카드 문자열
        type, alphabet, wildcard = split(query) 
        # 알파벳 문자열과 와일드카드 문자열의 길이
        n, m = len(alphabet), len(wildcard)
        # 쿼리 길이를 기준으로 필터링
        words = [word for word in words if len(word) == len(query)] 
        # 쿼리 일치 여부 확인
        if type == prefix:
            words = [word for word in words if word[-n:] == alphabet] 
        else:
            words = [word for word in words if word[:n] == alphabet]
        # 개수 반환
        return len(words)
    
    queries_dict = defaultdict(int)
    
    for query in set(queries):
        queries_dict[query] = match(words, query)
    
    return [queries_dict[query] for query in queries]
