// 재생 시간 반환 함수
function getTime(time1, time2) {
  const [hour1, minute1] = time1.split(':').map(value => parseInt(value));
  const [hour2, minute2] = time2.split(':').map(value => parseInt(value));
  return (hour2 - hour1) * 60 + (minute2 - minute1);
}

// 재생 악보 반환 함수 
function getMelody(melody, times) {
  melody = replace(melody);
  const div = parseInt(times / melody.length);
  const mod = times % melody.length;
  
  if (div === 0) {
      return melody.slice(0, mod);
  } else {
      return melody.repeat(div) + melody.slice(0, mod);
  }
}

// 문자열 -> 딕셔너리
function convert(info, index) {
  info = info.split(',');
  
  const title = info[2];
  const times = getTime(info[0], info[1]);
  const melody = getMelody(info[3], times);
  
  return {title, times, melody, index};
}

// C# -> c, D# -> d, F# -> f, G# -> g, A# -> a
function replace(melody) {
  return melody.replace(/C#/g, 'c')
               .replace(/D#/g, 'd')
               .replace(/F#/g, 'f')
               .replace(/G#/g, 'g')
               .replace(/A#/g, 'a')
}

// 필터링 함수
function filter(m, musicinfos) {
  m = replace(m);
  musicinfos = musicinfos.filter(value => value.melody.includes(m));
  return musicinfos;
}

// 정렬 함수
function sort(musicinfos) {
  musicinfos.sort((a, b) => {
      if (a.times === b.times) {
          return a.index - b.index;     
      } else {
          return b.times - a.times;
      }
  });
  
  return musicinfos;
}

function solution(m, musicinfos) {
  musicinfos = musicinfos.map((value, index) => convert(value, index));
  musicinfos = filter(m, musicinfos);
  musicinfos = sort(musicinfos);
  return musicinfos.length > 0 ? musicinfos[0]['title'] : '(None)';
}