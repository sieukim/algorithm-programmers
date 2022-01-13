function solution(new_id) {
  let answer = '';

  answer = new_id.toLowerCase();
  answer = answer.replace(/[^a-z0-9-_.]/g, '');
  answer = answer.replace(/\.\.+/g, '.');
  answer = answer.replace(/^\.|\.$/g, '');

  if (answer === '') answer += 'a';

  if (answer.length > 15) {
    answer = answer.slice(0, 15);
    answer = answer.replace(/^\.|\.$/g, '');
  }

  if (answer.length <= 2) {
    const n = answer.length;
    const x = answer[n - 1];

    while (answer.length <= 2) {
      answer += x;
    }
  }

  return answer;
}