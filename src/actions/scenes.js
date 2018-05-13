const { REACT_APP_BASE_URL } = require('../config');
const { normalizeResponseErrors } = require('./utils');

export function getScenes(jwt) {
  return function(dispatch) {
    dispatch(getScenesRequest());
    return fetch(`${ REACT_APP_BASE_URL }/scenes`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
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

export function updateScene(updateObj, jwt) {
  return function(dispatch) {
    dispatch(updateSceneRequest());
    return fetch(`${ REACT_APP_BASE_URL }/scenes/${ updateObj.id }`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${ jwt }`
      },
      body: JSON.stringify(updateObj)
    })
      .then(res => {
        return normalizeResponseErrors(res);
      })
      .then(res => {
        return res.json();
      })
      .then(res => {
        dispatch(updateSceneSuccess(res));
      })
      .catch(err => {
        dispatch(updateSceneError(err))
      });
  }
}

export const UPDATE_SCENE_REQUEST = 'UPDATE_SCENE_REQUEST';
export function updateSceneRequest() {
  return {
    type: UPDATE_SCENE_REQUEST
  }
}

export const UPDATE_SCENE_SUCCESS = 'UPDATE_SCENE_SUCCESS';
export function updateSceneSuccess(res) {
  return {
    type: UPDATE_SCENE_SUCCESS,
    payload: {
      message: res.message
    }
  }
}

export const UPDATE_SCENE_ERROR = 'UPDATE_SCENE_ERROR';
export function updateSceneError(err) {
  console.log(`Problem! Error is: ${ err }`);
  return {
    type: UPDATE_SCENE_ERROR,
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

// export function fetchUrls(lines, jwt) {
//   return function(dispatch) {
//     dispatch(fetchUrlsRequest());
//     return fetch(`${ REACT_APP_BASE_URL }/audio`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//         'Authorization': `Bearer ${ jwt }`
//       },
//       body: JSON.stringify({ lines })
//     })
//       .then(res => {
//         return normalizeResponseErrors(res);
//       })
//       .then(res => {
//         return res.json();
//       })
//       .then(res => {
//         dispatch(fetchUrlsSuccess(res));
//       })
//       .catch(err => {
//         dispatch(fetchUrlsError(err));
//       });
//   }
// }
//
// export const FETCH_URLS_REQUEST = 'FETCH_URLS_REQUEST';
// export function fetchUrlsRequest(data) {
//   return {
//     type: FETCH_URLS_REQUEST
//   }
// }
//
// export const FETCH_URLS_SUCCESS = 'FETCH_URLS_SUCCESS';
// export function fetchUrlsSuccess(data) {
//   console.log(data);
//
//   return {
//     type: FETCH_URLS_SUCCESS,
//     payload: {
//       data
//     }
//   }
// }
//
// export const FETCH_URLS_ERROR = 'FETCH_URLS_ERROR';
// export function fetchUrlsError(err) {
//   console.log(err);
//
//   return {
//     type: FETCH_URLS_ERROR,
//     payload: {
//       err
//     }
//   }
// }

export function fetchUrl(text, lineId, jwt, lineIndex) {
  return function(dispatch) {
    dispatch(fetchUrlRequest());
    return fetch(`${ REACT_APP_BASE_URL }/audio`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${ jwt }`
      },
      body: JSON.stringify({ text, lineId })
    })
      .then(res => {
        return normalizeResponseErrors(res);
      })
      .then(res => {
        return res.json();
      })
      .then(res => {
        dispatch(fetchUrlSuccess(res.url, lineIndex));
      })
      .catch(err => {
        dispatch(fetchUrlError(err));
      });
  }
}

export const FETCH_URL_REQUEST = 'FETCH_URL_REQUEST';
export function fetchUrlRequest() {
  return {
    type: FETCH_URL_REQUEST
  }
}

export const FETCH_URL_SUCCESS = 'FETCH_URL_SUCCESS';
export function fetchUrlSuccess(url, lineIndex) {
  return {
    type: FETCH_URL_SUCCESS,
    payload: {
      url,
      lineIndex
    }
  }
}

export const FETCH_URL_ERROR = 'FETCH_URL_ERROR';
export function fetchUrlError(err) {
  console.log(err);

  return {
    type: FETCH_URL_ERROR,
    payload: {
      err
    }
  }
}



// export function readLine(text, lineId, jwt) {
//   return function(dispatch) {
//     dispatch(readLineRequest());
//     return fetch(`${ REACT_APP_BASE_URL }/audio`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//         'Authorization': `Bearer ${ jwt }`
//       },
//       body: JSON.stringify({ text, lineId })
//     })
//       .then(res => {
//         return normalizeResponseErrors(res);
//       })
//       .then(res => {
//         return res.json();
//       })
//       .then(res => {
//         dispatch(readLineSuccess(res.url));
//       })
//       .catch(err => {
//         dispatch(readLineError(err));
//       });
//   }
// }
//
// export const READ_LINE_REQUEST = 'READ_LINE_REQUEST';
// export function readLineRequest() {
//   return {
//     type: READ_LINE_REQUEST
//   }
// }
//
// export const READ_LINE_SUCCESS = 'READ_LINE_SUCCESS';
// export function readLineSuccess(url) {
//   const audio = new Audio(url);
//   audio.play();
//
//   return {
//     type: READ_LINE_SUCCESS,
//   }
// }
//
// export const READ_LINE_ERROR = 'READ_LINE_ERROR';
// export function readLineError(err) {
//   return {
//     type: READ_LINE_ERROR,
//     payload: {
//       err
//     }
//   }
// }
