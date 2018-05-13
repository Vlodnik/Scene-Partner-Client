import * as actions from '../actions/scenes';
import shortid from 'shortid';

const initialState = {
  currentSceneId: null,
  loading: false,
  error: null,
  scenes: []
};

export default function scenePartnerReducer(state=initialState, action) {
  if(action.type === actions.GET_SCENES_REQUEST) {
    return Object.assign({}, state, { loading: true, error: null });
  } else if(action.type === actions.GET_SCENES_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      scenes: action.payload.scenes
    });
  } else if(action.type === actions.GET_SCENES_ERROR) {
    return Object.assign({}, state, { loading: false, error: action.payload.err });
  } else if(action.type === actions.ADD_SCENE_REQUEST) {
    return Object.assign({}, state, { loading: true, error: null });
  } else if(action.type === actions.ADD_SCENE_SUCCESS) {
    // const newId = shortid.generate();
    const newScene = action.payload.newScene;
    return Object.assign({}, state, {
      currentSceneId: newScene.id,
      loading: false,
      scenes: [
        ...state.scenes,
        newScene
      ]
    });
  } else if(action.type === actions.ADD_SCENE_ERROR) {
    return Object.assign({}, state, { loading: false, error: action.payload.err });
  } else if(action.type === actions.CHANGE_SCENE) {
    return Object.assign({}, state, {
      currentSceneId: action.payload.sceneId
    });
  } else if(action.type === actions.TOGGLE_EDITING) {
    const targetScene = state.scenes.find(scene => scene.id === state.currentSceneId);
    const toggled = targetScene.editing ? false : true;
    return Object.assign({}, state, {
      scenes: state.scenes.map(function(scene) {
        if(scene.id === state.currentSceneId) {
          return {
            ...scene,
            editing: toggled
          }
        }
        return scene;
      })
    });
  } else if(action.type === actions.CHANGE_LINE) {
    const { sceneId, lineIndex, character, text } = action.payload

    const targetScene = state.scenes.find(scene => scene.id === sceneId);
    let updatedLines = [...targetScene.lines];

    updatedLines[lineIndex].key = shortid.generate();
    updatedLines[lineIndex].character = character;
    updatedLines[lineIndex].text = text;

    return Object.assign({}, state, {
      scenes: state.scenes.map(function(scene) {
        if(scene.id === sceneId) {
          return Object.assign({}, scene, {
            lines: updatedLines
          });
        }
        return scene;
      })
    });
  } else if(action.type === actions.DELETE_LINE) {
    const { lineIndex, sceneId } = action.payload;

    const targetScene = state.scenes.find(scene => scene.id === sceneId);
    const updatedLines = [...targetScene.lines];
    updatedLines.splice(lineIndex, 1);

    return Object.assign({}, state, {
      scenes: state.scenes.map(function(scene) {
        if(scene.id === sceneId) {
          return Object.assign({}, scene, {
            lines: updatedLines
          });
        }
        return scene;
      })
    });
  } else if(action.type === actions.ADD_LINE) {
    return Object.assign({}, state, {
      scenes: state.scenes.map(function(scene) {
        if(scene.id === action.payload.sceneId) {
          return {
            ...scene,
            lines: [...scene.lines,
              {
                key: shortid.generate(),
                character: action.payload.character,
                text: action.payload.text
              }
            ]
          }
        }
        return scene;
      })
    });
  } else if(action.type === actions.SELECT_CHARACTER) {
    return Object.assign({}, state, {
      scenes: state.scenes.map(function(scene) {
        if(scene.id === action.payload.sceneId) {
          return {
            ...scene,
            userCharacter: action.payload.character
          }
        }
        return scene;
      })
    });
  } else if(action.type === actions.FETCH_URL_REQUEST) {
    return Object.assign({}, state, { loading: true, error: null });
  } else if(action.type === actions.FETCH_URL_SUCCESS) {
    const { url, lineIndex } = action.payload;
    const targetScene = state.scenes.find(scene => scene.id === state.currentSceneId);

    let updatedLines = [...targetScene.lines];
    updatedLines[lineIndex].url = url;
    return Object.assign({}, state, {
      loading: false,
      scenes: state.scenes.map(function(scene) {
        if(scene.id === state.currentSceneId) {
          return Object.assign({}, scene, {
            lines: updatedLines
          });
        }
        return scene;
      })
    });
  } else if(action.type === actions.FETCH_URL_ERROR) {
    return Object.assign({}, state, { loading: false, error: action.payload.err });
  }
  // else if(action.type === actions.READ_LINE_REQUEST) {
  //   return Object.assign({}, state, { loading: true, error: null });
  // } else if(action.type === actions.READ_LINE_SUCCESS) {
  //   return Object.assign({}, state, { loading: false });
  // } else if(action.type === actions.READ_LINE_ERROR) {
  //   return Object.assign({}, state, { loading: false, error: action.payload.err });
  // }
  return state;
};
