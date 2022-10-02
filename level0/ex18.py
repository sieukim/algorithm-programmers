def solution(id_pw, db):
    # [id, pw] -> [id 일치 여부, pw 일치 여부]
    db_match = [[id==id_pw[0], pw==id_pw[1]] for id, pw in db]

    # 아이디와 비밀번호가 모두 일치하는 회원정보가 있는 경우
    if [True, True] in db_match:
        return 'login'
    # 로그인이 실패했을 때 아이디가 일치하는 회원이 없는 경우
    elif [True, False] not in db_match:
        return 'fail'
    # 아이디는 일치하지만 비밀번호가 일치하는 회원이 없는 경우
    else:
        return 'wrong pw'
    