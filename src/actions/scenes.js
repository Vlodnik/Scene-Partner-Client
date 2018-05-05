const $ = require('jquery');
const shortid = require('shortid');
const { REACT_APP_BASE_URL } = require('../config');
const { normalizeResponseErrors } = require('./utils');

export function getScenes(jwt) {
  return function(dispatch) {
    dispatch(getScenesRequest());
    return fetch(`${ REACT_APP_BASE_URL }/scenes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ jwt }`
      }
    })
      .then(res => {
        return normalizeResponseErrors(res);
      })
      .then(res => {
        return res.json();
      })
      .then(res => {
        dispatch(getScenesSuccess(res));
      })
      .catch(err => {
        dispatch(getScenesError(err));
      });
  }
}

export const GET_SCENES_REQUEST = 'GET_SCENES_REQUEST';
export function getScenesRequest() {
  return {
    type: GET_SCENES_REQUEST
  }
}

export const GET_SCENES_SUCCESS = 'GET_SCENES_SUCCESS';
export function getScenesSuccess(scenes) {
  return {
    type: GET_SCENES_SUCCESS,
    payload: {
      scenes
    }
  }
}

export const GET_SCENES_ERROR = 'GET_SCENES_ERROR';
export function getScenesError(err) {
  return {
    type: GET_SCENES_ERROR,
    payload: {
      err
    }
  }
}

export function addScene(title, jwt) {
  return function(dispatch) {
    dispatch(addSceneRequest());
    return fetch(`${ REACT_APP_BASE_URL }/scenes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${ jwt }`
      },
      body: JSON.stringify({ title })
    })
      .then(res => {
        return normalizeResponseErrors(res);
      })
      .then(res => {
        return res.json();
      })
      .then(res => {
        dispatch(addSceneSuccess(res));
      })
      .catch(err => {
        dispatch(addSceneError(err));
      });
  }
}

export const ADD_SCENE_REQUEST = 'ADD_SCENE_REQUEST';
export function addSceneRequest() {
  return {
    type: ADD_SCENE_REQUEST
  }
}

export const ADD_SCENE_SUCCESS = 'ADD_SCENE_SUCCESS';
export function addSceneSuccess(newScene) {
  return {
    type: ADD_SCENE_SUCCESS,
    payload: {
      newScene
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

export const ADD_LINE = 'ADD_LINE'
export function addLine(jwt, character, text, sceneId) {
  // return function(dispatch) {
  //   dispatch(addLineRequest());
  //
  //
  //
  //   return fetch(`${ REACT_APP_BASE_URL }/scenes`, {
  //     method: 'PUT',
  //     headers: {
  //       'content-type': 'application/json',
  //       'Authorization': `Bearer ${ jwt }`
  //     },
  //     body: JSON.stringify({
  //       id: sceneId,
  //
  //     })
  //   })
  // }

  return {
    type: ADD_LINE,
    payload: {
      character,
      text,
      sceneId
    }
  }
}

// export const ADD_LINE_REQUEST = 'ADD_LINE_REQUEST';
// export function addLineRequest() {
//   return {
//     type: ADD_LINE_REQUEST
//   }
// }
//
// export const ADD_LINE_SUCCESS = 'ADD_LINE_SUCCESS';
// export function addLineSuccess() {
//   return {
//     type: ADD_LINE_SUCCESS,
//     payload: {
//       // add payload and param
//     }
//   }
// }
//
// export const ADD_LINE_ERROR = 'ADD_LINE_ERROR';
// export function addLineError(err) {
//   return {
//     type: ADD_LINE_ERROR,
//     payload: {
//       err
//     }
//   }
// }

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
