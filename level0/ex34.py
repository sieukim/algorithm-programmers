def solution(polynomial):
    
    # 동류항끼리 더해 변수항과 
    # 상수항을 반환하는 함수
    def calc(src):
        # 변수항 계수와 상수항
        var, const = 0, 0
        
        for x in src.split(' '):
            # 연산자 또는 빈 문자열
            if x == '+' or x == '':
                continue
            # 상수항
            if x.isdigit():
                const += int(x)
            # 변수항
            else:
                var += int(x[:-1]) if len(x) > 1 else 1
        
        # 결과식
        result = []
        
        # 변수항이 존재 
        if var > 0:
            if var == 1:
                result.append('x')
            else:
                result.append(str(var)+'x')
        # 상수항이 존재
        if const > 0:
            result.append(str(const))
        elif not result:
            result.append(str(const))
            
        return ' + '.join(result)
        
    return calc(polynomial)
    
    