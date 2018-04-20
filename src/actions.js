const $ = require('jquery');

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

export const CHANGE_LINE = 'CHANGE_LINE';
export function changeLine(character, text, lineIndex, sceneId) {
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

export const DELETE_LINE = 'DELETE_LINE';
export function deleteLine(lineIndex, sceneId) {
  return {
    type: DELETE_LINE,
    payload: {
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

export const READ_LINE = 'READ_LINE';
export function readLine(text) {
  // function logResponse(data) {
  //   console.log(`Success! Data is: ${ data }`);
  // };
  //
  // $.ajax({
  //   url: 'hostingUrl',
  //   dataType: 'string',
  //   data: text,
  //   success: logResponse
  // })

  return {
    type: READ_LINE,
    payload: {
      text
    }
  }
}
