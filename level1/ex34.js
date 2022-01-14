function solution(a, b) {
  function getDay(n) {
    let day = ''

    switch (n) {
      case 0:
        day = 'SUN';
        break;
      case 1:
        day = 'MON';
        break;
      case 2:
        day = 'TUE';
        break;
      case 3:
        day = 'WED';
        break;
      case 4:
        day = 'THU';
        break;
      case 5:
        day = 'FRI';
        break;
      case 6:
        day = 'SAT';
        break;
    }

    return day;
  }

  const date = new Date(`2016-${a}-${b}`);
  const day = getDay(date.getDay());

  return day;
}