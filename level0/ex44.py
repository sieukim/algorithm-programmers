def solution(array):
    value = max(array)
    index = array.index(value)
    return [value, index]