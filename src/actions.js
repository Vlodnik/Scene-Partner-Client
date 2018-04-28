const $ = require('jquery');
const API_BASE_URL = require('./config');

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

export const CREATE_FILES_REQUEST = 'CREATE_FILES_REQUEST';
export function createFilesRequest() {
  return {
    type: CREATE_FILES_REQUEST
  }
}

export const CREATE_FILES_SUCCESS = 'CREATE_FILES_SUCCESS';
export function createFilesSuccess(lineUrls, sceneId) {
  console.log(lineUrls);
  return {
    type: CREATE_FILES_SUCCESS,
    payload: {
      lineUrls,
      sceneId
    }
  }
}

export const CREATE_FILES_ERROR = 'CREATE_FILES_ERROR';
export function createFilesError(error) {
  console.log(error);
  return {
    type: CREATE_FILES_ERROR,
    payload: {
      error
    }
  }
}

export function createFiles(lines, sceneId) {
  return function(dispatch) {
    dispatch(createFilesRequest());
    fetch('http://localhost:8080/audio', {
      method: 'POST',
      body: JSON.stringify({ lines }),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }).then(res => {
      dispatch(createFilesSuccess(res, sceneId));
    }).catch(err => {
      dispatch(createFilesError(err));
    });
  }
}

export const READ_LINE = 'READ_LINE';
export function readLine(text, lineId) {
  // const uriText = encodeURIComponent(text);
  const postObj = { text, lineId };

  $.ajax({
    url: `${ API_BASE_URL }/audio`,
    method: 'POST',
    contentType: 'application/json',
    dataType: 'text',
    processData: false,
    data: JSON.stringify(postObj),
    success: createAndPlayAudio,
    error: logError
  });
  // https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3
  // 'http://localhost:8080/HyJL7EA3M.mp3'

  function createAndPlayAudio(url) {
    console.log(url);
    const audio = new Audio(url);
    audio.play();
  }

  function logError(error) {
    console.log(error);
  }

  return {
    type: READ_LINE,
    payload: {
      text
    }
  }
}

// export const CREATE_FILES = 'CREATE_FILES';
// export function createFiles(lines) {
//   console.log('We got the action for createFiles');
//
// }
