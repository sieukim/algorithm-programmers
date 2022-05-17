# 총 라운드 정보 문자열 -> 각 라운드 정보 리스트
def get_result(totalResult):
    # 각 라운드 정보 리스트
    result = [{
        'score': '',
        'bonus': None,
        'option': None
    } for i in range(3)]
    
    # 현재 라운드
    current = 0
    
    # 탐색
    for value in totalResult:
        # 점수인 경우
        if value.isdigit():
            # 현재 라운드 보너스 정보가 있는 경우
            if result[current]['bonus']:
                # 다음 라운드로 이동
                current += 1
            # 점수 정보에 추가
            result[current]['score'] += value
        # 보너스인 경우
        elif value in ('S', 'D', 'T'):
            # 보너스 정보에 추가
            result[current]['bonus'] = value
        # 옵션인 경우
        else:
            # 옵션 정보에 추가
            result[current]['option'] = value
    
    return result

def solution(dartResult):
    # 각 라운드 정보 리스트
    result = get_result(dartResult)
    
    # 각 라운드 정보 탐색
    for i in range(3):
        # 현재 라운드 점수, 보너스, 옵션
        score, bonus, option = result[i].values()
        
        # 싱글 보너스인 경우
        if bonus == 'S':
            score = int(score)
        # 더블 보너스인 경우
        elif bonus == 'D':
            score = int(score) ** 2
        # 트리플 보너스인 경우
        else:
            score = int(score) ** 3
            
        # 스타상인 경우
        if option == '*':
            # 현재 점수 2배
            score *= 2
            # 이전 점수 2배
            if i > 0:
                result[i-1]['score'] *= 2
        # 아차상인 경우
        elif option == '#':
            # 현재 점수 -1배
            score *= -1
        
        # 현재 라운드 최종 점수 대입
        result[i]['score'] = score
        
    # 총 점수
    totalScore = sum([value['score'] for value in result])
    
    return totalScore
        