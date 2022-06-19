def solution(s):
    answer = []
    
    # 전처리
    subsets = [subset.strip('{}').split(',') for subset in s.split(sep='},')]
    
    # 원소 개수를 기준으로 오름차순 정렬
    subsets.sort(key=lambda x: len(x))
    
    for subset in subsets:
        for value in subset:
            if value not in answer:
                answer.append(value)
        
    # 문자열 => 정수
    answer = [int(value) for value in answer]
        
    return answer