const $ = require('jquery');
const { REACT_APP_BASE_URL } = require('../config');
const { normalizeResponseErrors } = require('./utils');

export function addScene(title) {
  return function(dispatch) {
    dispatch(addSceneRequest());

    $.ajax({
      url: `${ REACT_APP_BASE_URL }/scenes`,
      method: 'POST',
      contentType: 'application/json',
      dataType: 'text',
      processData: false,
      data: JSON.stringify({ title }),
      success: dispatchSuccess,
      error: dispatchError
    });

    function dispatchSuccess() {
      dispatch(addSceneSuccess());
    }

    function dispatchError(err) {
      dispatch(addSceneError(err))
    }
  }
}

export const ADD_SCENE_REQUEST = 'ADD_SCENE_REQUEST';
export function addSceneRequest() {
  return {
    type: ADD_SCENE_REQUEST
  }
}

export const ADD_SCENE_SUCCESS = 'ADD_SCENE_SUCCESS';
export function addSceneSuccess() {
  return {
    type: ADD_SCENE_SUCCESS,
    payload: {

    }
  }
}

export const ADD_SCENE_ERROR = 'ADD_SCENE_ERROR';
export function addSceneError(err) {
  return {
    type: ADD_SCENE_ERROR,
    payload: {
      err
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

export function readLine(text, lineId) {
  return function(dispatch) {
    dispatch(readLineRequest());

    const postObj = { text, lineId };

    $.ajax({
      url: `${ REACT_APP_BASE_URL }/audio`,
      method: 'POST',
      contentType: 'application/json',
      dataType: 'text',
      processData: false,
      data: JSON.stringify(postObj),
      success: dispatchSuccess,
      error: dispatchError
    });

    function dispatchSuccess(url) {
      dispatch(readLineSuccess(url));
    }

    function dispatchError(err) {
      dispatch(readLineError(err));
    }
  }
}

export const READ_LINE_REQUEST = 'READ_LINE_REQUEST';
export function readLineRequest() {
  return {
    type: READ_LINE_REQUEST
  }
}

export const READ_LINE_SUCCESS = 'READ_LINE_SUCCESS';
export function readLineSuccess(url) {
  const audio = new Audio(url);
  audio.play();

  return {
    type: READ_LINE_SUCCESS,
  }
}

export const READ_LINE_ERROR = 'READ_LINE_ERROR';
export function readLineError(err) {
  return {
    type: READ_LINE_ERROR,
    payload: {
      err
    }
  }
}
