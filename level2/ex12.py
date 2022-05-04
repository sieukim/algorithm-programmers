def solution(s):
    # 주어진 문자열을 n개 단위로 잘라 생성한 토큰 정보를 반환하는 함수 
    def get_tokens(s, n):
        # n개 단위로 잘라 생성한 토큰 정보를 담는 리스트
        tokens = [s[i:i+n] for i in range(0, len(s), n)]
        return tokens
    
    # 주어진 토큰 리스트를 압축한 결과를 문자열로 반환하는 함수
    def get_result(tokens):
        # 압축 결과
        result = ''
        
        # 토큰 연속 횟수
        count = 0
        # 이전 토큰 정보
        before = tokens[0]
        
        for now in tokens:
            # 연속하는 경우
            if before == now:
                # 연속 횟수 증가
                count += 1
            # 연속하지 않는 경우
            else:
                # 압축 결과 업데이트 
                result += str(count if count > 1 else '') + before
                # 연속 횟수 초기화
                count = 1
                # 이전 토큰 정보 초기화
                before = now
        
        # 압축 결과 업데이트
        result += str(count if count > 1 else '') + before
        
        return result
    
    # 압축 결과 리스트
    results = []
    
    for i in range(1, len(s) + 1):
        # 주어진 문자열 s를 i개 단위로 잘라 생성한 토큰 정보 리스트
        tokens = get_tokens(s, i)
        # 토큰 정보 리스트 압축 결과 문자열
        result = get_result(tokens)
        # 문자열 길이를 압축 결과 리스트에 추가
        results.append(len(result))
    
    # 가장 짧은 압축 결과 길이를 반환
    return min(results)
    