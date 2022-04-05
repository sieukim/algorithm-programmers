def solution(array, commands):
    numbers = []
    
    for command in commands:
        [i, j, k] = command
        # ith ~ jth slice
        sliced = array[i - 1 : j]
        # sort and find kth
        number = sorted(sliced)[k - 1]
        # add to numbers
        numbers.append(number)
    
    return numbers