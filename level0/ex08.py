def solution(quiz):
    # 수식 판단 함수
    def check(statement):
        expr, result = statement.split('=')
        return "O" if eval(expr) == int(result) else "X"
        
    return list(map(check, quiz))