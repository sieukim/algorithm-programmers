def solution(answers):
    # 정답 길이
    n = len(answers)

    # 수포자 찍는 방식
    pattern1 = [1, 2, 3, 4, 5] * ((n - 1) // 5 + 1)
    pattern2 = [2, 1, 2, 3, 2, 4, 2, 5] * ((n - 1) // 8 + 1)
    pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] * ((n - 1) // 10 + 1)
    
    patterns = [pattern1, pattern2, pattern3]
    
    # 수포자 정답 개수
    counts = []
    
    for pattern in patterns:
        count = 0
        for i in range(n):
            # 정답인 경우
            if (answers[i] == pattern[i]):
                count += 1
        counts.append(count)
    
    # 최대 정답 수포자
    return [i + 1 for i in range(3) if counts[i] == max(counts)]