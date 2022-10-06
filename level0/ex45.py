def solution(rsp):
    # 공략법
    rsp_dict = {'2': '0', '0': '5', '5': '2'}
    # 모두 이기는 경우
    result = ''
    
    for x in rsp:
        result += rsp_dict[x]
    
    return result
    