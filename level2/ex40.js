function solution(m, musicinfos) {
  // 주어진 악보 정보를 배열로 반환하는 함수
  function getMusicNote(music) {
    const musicScore = [];

    for (let i = 0; i < music.length; i++) {
      // #이 붙는 경우
      if (music[i + 1] === '#') {
        musicScore.push(music[i] + music[i + 1]);
        i++;
      }
      // #이 안 붙는 경우
      else {
        musicScore.push(music[i] + '@');
      }
    }

    return musicScore;
  }

  // 주어진 문자열을 이용하여 음악 정보를 반환하는 함수
  function getMusicInfo(str) {
    // infoArr = [시간 정보, 제목, 악보]
    const infoArr = str.split(',');

    // 음악 정보 객체
    const musicinfo = {};

    // 시작 시간
    const [startTimeHour, startTimeMinute] = infoArr[0].split(':');
    // 종료 시간
    const [endTimeHour, endTimeMinute] = infoArr[1].split(':');

    // 시간 정보
    const startTime = new Date(2022, 3, 19, startTimeHour, startTimeMinute);
    const endTime = new Date(2022, 3, 19, endTimeHour, endTimeMinute);

    // 재생 시간
    let playTime = (endTime.getTime() - startTime.getTime()) / 60000;

    // 00:00시에 끝나는 경우
    if (playTime < 0) playTime += 1440;

    musicinfo.playTime = playTime;

    // 제목
    const title = infoArr[2];
    musicinfo.title = title;

    // 악보
    const musicNote = getMusicNote(infoArr[3]);

    // 재생 시간에 맞게 반복한 악보
    const replayedMusicNote = [];
    // 재생 횟수
    const replayCount = Math.floor(musicinfo.playTime / musicNote.length);
    // 남은 멜로디 개수
    const extraCount = musicinfo.playTime % musicNote.length;

    for (let i = 0; i < replayCount; i++) {
      replayedMusicNote.push(...musicNote);
    }

    for (let i = 0; i < extraCount; i++) {
      replayedMusicNote.push(musicNote[i]);
    }

    musicinfo.musicNote = replayedMusicNote.join(' ');

    return musicinfo;
  }

  // 주어진 멜로디 조건을 만족하는 음악의 제목을 반환하는 함수
  function getTitle(m, musicinfos) {
    for (const musicinfo of musicinfos) {
      const musicNote = musicinfo.musicNote;
      // 멜로디 조건을 만족하는 경우
      if (musicNote.includes(m)) return musicinfo.title;
    }
    return '(None)';
  }

  // 악보 정보 배열로 변환 후 공백 기준으로 합치기
  m = getMusicNote(m).join(' ');
  // 음악 정보 객체로 변환
  musicinfos = musicinfos.map(musicinfo => getMusicInfo(musicinfo));
  // 재생 시간 기준으로 내림차순 정렬
  musicinfos.sort((a, b) => b.playTime - a.playTime);

  // 멜로디 조건을 만족하는 음악 제목
  const title = getTitle(m, musicinfos);

  return title;
}