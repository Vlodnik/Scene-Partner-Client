export const ADD_SCENE = 'ADD_SCENE';
export function addScene(title) {
  return {
    type: ADD_SCENE,
    payload: {
      title
    }
  }
}

export const CHANGE_SCENE = 'CHANGE_SCENE';
export function changeScene(sceneId) {
  console.log('switching to scene ' + sceneId);
  return {
    type: CHANGE_SCENE,
    payload: {
      sceneId
    }
  }
}

export const ADD_LINE = 'ADD_LINE';
export function addLine(character, line, sceneId) {
  return {
    type: ADD_LINE,
    payload: {
      character,
      line,
      sceneId
    }
  }
}

export const SELECT_CHARACTER = 'SELECT_CHARACTER';
export function selectCharacter(character, sceneId) {
  return {
    type: SELECT_CHARACTER,
    payload: {
      character,
      sceneId
    }
  }
}
