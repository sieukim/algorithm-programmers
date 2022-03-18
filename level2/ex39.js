function solution(skillOrder, skillTrees) {
  // 주어진 스킬 트리가 스킬 순서를 만족하는지 확인하는 함수
  function checkOrder(skillTree) {
    // 스킬 순서 객체
    const order = {};

    // 스킬 순서 객체 초기화
    for (let i = 0; i < skillOrder.length; i++) {
      const skill = skillOrder[i];
      order[skill] = {
        order: i,
        visited: false,
      }
    }

    // 현재 순서
    let orderIndex = 0;

    for (let i = 0; i < skillTree.length; i++) {
      const skill = skillTree[i];

      // 스킬 순서를 지켜야하는 스킬인 경우
      if (order[skill]) {
        // 스킬 순서를 지킨 경우
        if (order[skill]['order'] === orderIndex) {
          order[skill]['visited'] = true;
          orderIndex++;
        }
        // 스킬 순서를 못 지킨 경우
        else {
          return false;
        }
      }
    }

    return true;
  }

  let count = 0;

  skillTrees.forEach(skillTree => {
    if (checkOrder(skillTree)) count++;
  });

  return count;
}