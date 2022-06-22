def solution(skill, skill_trees):
    answer = 0
    
    for skill_tree in skill_trees:
        # 스킬 위치
        index = [skill_tree.find(value) for value in skill]

        # 필요없는 위치 제거
        for _ in range(len(index)):
            if index[-1] == -1:
                index = index[:-1]

        # 가능한 순서인 경우
        if sorted(index) == index and -1 not in index:
            answer += 1
        
    return answer