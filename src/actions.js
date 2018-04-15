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

export const ADD_LINE = 'ADD_LINE';
export function addLine(character, line, sceneId) {
  console.log('creating new line of:' + character + '\'s: ' + line);
  return {
    type: ADD_LINE,
    payload: {
      character,
      line,
      sceneId
    }
  }
}
