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
  return {
    type: CHANGE_SCENE,
    payload: {
      sceneId
    }
  }
}

export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export function toggleEditing() {
  console.log('toggling editing mode');
  return {
    type: TOGGLE_EDITING,
  }
}

export const ADD_LINE = 'ADD_LINE';
export function addLine(character, text, sceneId) {
  return {
    type: ADD_LINE,
    payload: {
      character,
      text,
      sceneId
    }
  }
}

// export const CHANGE_CHARACTER = 'CHANGE_CHARACTER';
// export function changeCharacter(character, lineIndex, sceneId) {
//   return {
//     type: CHANGE_CHARACTER,
//     payload: {
//       character,
//       lineIndex,
//       sceneId
//     }
//   }
// }

export const CHANGE_LINE = 'CHANGE_LINE';
export function changeLine(character, text, lineIndex, sceneId) {
  console.log('creating CHANGE_LINE action');
  return {
    type: CHANGE_LINE,
    payload: {
      character,
      text,
      lineIndex,
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
