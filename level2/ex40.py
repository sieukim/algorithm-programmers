from datetime import datetime
from functools import cmp_to_key

# 재생 시간 반환 함수 
def get_time(time1, time2): 
    time1 = datetime.strptime(time1, "%H:%M")
    time2 = datetime.strptime(time2, "%H:%M")
    return int((time2 - time1).seconds // 60)

# 재생 악보 반환 함수 
def get_melody(melody, times):
    melody = replace(melody)
    div, mod = divmod(times, len(melody))
    
    if div == 0:
        return melody[:mod]
    else:
        return melody * div + melody[:mod]

# 문자열 -> 딕셔너리
def convert(info, index):
    info = info.split(',')
    
    title = info[2]
    times = get_time(info[0], info[1])
    melody = get_melody(info[3], times)

    return {'title': title,
            'times': times,
            'melody': melody,
            'index': index,}

# C# -> c, D# -> d, F# -> f, G# -> g, A# -> a
def replace(melody):
    melody = melody.replace('C#', 'c')
    melody = melody.replace('D#', 'd')
    melody = melody.replace('F#', 'f')
    melody = melody.replace('G#', 'g')
    melody = melody.replace('A#', 'a')
    return melody

# 필터링 함수
def filter(m, musicinfos):
    m = replace(m)
    musicinfos = [value for value in musicinfos if m in value['melody']]
    return musicinfos 

# 정렬 함수
def sort(musicinfos):
    def cmp(x, y):
        if x['times'] == y['times']:
            return x['index'] - y['index']
        else:
            return y['times'] - x['times']
    
    return sorted(musicinfos, key=cmp_to_key(cmp))

def solution(m, musicinfos):
    musicinfos = [convert(musicinfos[i], i) for i in range(len(musicinfos))]
    musicinfos = filter(m, musicinfos)
    musicinfos = sort(musicinfos)
    return musicinfos[0]['title'] if len(musicinfos) > 0 else '(None)'