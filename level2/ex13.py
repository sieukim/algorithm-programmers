# 최종 닉네임 딕셔너리 반환 함수
def get_nickname(n, record):
    # 닉네임 딕셔너리
    nickname = {}
    
    for i in range(n):
        # 종류 
        command = record[i][0]
        
        # 퇴장인 경우
        if command == 'Leave':
            # 건너뜀
            continue
        
        # 아이디, 닉네임
        user_id, user_nickname = record[i][1], record[i][2]

        # 현재 사용자의 닉네임 변경
        nickname[user_id] = user_nickname
    
    return nickname

# 출력 메세지 리스트 반환 함수
def get_messages(n, record, nickname):
    messages = []
    
    for i in range(n):
        # 종류, 아이디
        command, id = record[i][0], record[i][1]
        
        # 입장인 경우
        if command == 'Enter':
            messages.append(f'{nickname[id]}님이 들어왔습니다.')
        
        # 퇴장인 경우
        if command == 'Leave':
            messages.append(f'{nickname[id]}님이 나갔습니다.')
            
    return messages

def solution(record):
    # record 크기
    n = len(record)
    # 각 문자열을 배열로 변환
    record = [value.split(' ') for value in record]
    
    # 닉네임 딕셔너리
    nickname = get_nickname(n, record)
    # 출력 메세지 리스트
    messages = get_messages(n, record, nickname)
    
    return messages