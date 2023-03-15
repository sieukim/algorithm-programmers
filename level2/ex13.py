def solution(record):
    # 최종 닉네임 딕셔너리 반환
    # key: 유저 아이디
    # value: 닉네임
    def get_nicknames(record):
        record = [line.split(' ') for line in record if line[0] != 'L']
        return {id: nickname for _, id, nickname in record}

    # 최종 메세지 리스트 반환
    def get_messages(record, nicknames):
        record = [line.split(' ')[:2] for line in record if line[0] != 'C']
        enter_message = lambda nickname: f'{nickname}님이 들어왔습니다.'
        leave_message = lambda nickname: f'{nickname}님이 나갔습니다.'
        return [enter_message(nicknames[id]) if command == 'Enter' else leave_message(nicknames[id]) for command, id in record]
        
    nicknames = get_nicknames(record)
    messages = get_messages(record, nicknames)
    return messages