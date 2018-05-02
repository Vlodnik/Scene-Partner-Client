import * as actions from './actions';
import shortid from 'shortid';

const initialState = {
  currentSceneId: null,
  loading: false,
  error: null,
  scenes: [{
    id: '2;3lh2',
    editing: false,
    title: 'Hamlet',
    userCharacter: 'all',
    lines: [{
      id: '2;l3k32',
      character: 'HAMLET',
      text: 'Hi there.',
      lineUrl: null
    }, {
      id: '23jkl32',
      character: 'OPHELIA',
      text: 'Howdy?',
      lineUrl: null
    }, {
      id: 'j3j3j',
      character: 'HAMLET',
      text: 'I am sad.',
      lineUrl: null
    }, {
      id: 'j32h2g',
      character: 'OPHELIA',
      text: 'Yikes.',
      lineUrl: null
    }]
  }]
  // scenes: [{
  //   id: '0',
  //   editing: false,
  //   title: 'Funky Chicken Scene',
  //   userCharacter: 'all',
  //   lines: [{
  //     id: 0,
  //     character: 'MR. CHICKEN',
  //     text: 'Hello, I am a chicken!'
  //   }, {
  //     id: 1,
  //     character: 'MR. CHICKEN',
  //     text: 'I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken!'
  //   }, {
  //     id: 2,
  //     character: 'A DUCK',
  //     text: 'Behold, my chicken-ly splendor!'
  //   }]
  // }, {
  //   id: '1',
  //   editing: false,
  //   title: 'Hamlet',
  //   userCharacter: 'all',
  //   lines: [{
  //     id: 0,
  //     character: 'HAMLET',
  //     text: 'Romeo, Romeo, hello there Romeo.'
  //   }, {
  //     id: 1,
  //     character: 'ROMEO',
  //     text: 'Oh Juliet! I am Hamlet.'
  //   }]
  // }, {
  //   id: '2',
  //   editing: false,
  //   title: 'Wicked: Popular',
  //   userCharacter: 'all',
  //   lines: [{
  //     id: 0,
  //     character: 'ELFABA',
  //     text: 'Wow! I\'m flying! But I don\'t know what I\'m reading.'
  //   }]
  // }, {
  //   id: '3',
  //   editing: false,
  //   title: 'Who\'s Afraid of Virginia Woolf',
  //   userCharacter: 'all',
  //   lines: [{
  //     id: 0,
  //     character: 'JOANNE',
  //     text: 'Is that my name? That feels wrong.'
  //   }, {
  //     id: 1,
  //     character: 'VIRGINIA WOOLF',
  //     text: 'Geez, I don\'t know. I\'m dead!'
  //   }]
  // }]
};

export const scenePartnerReducer = (state=initialState, action) => {
  if(action.type === actions.ADD_SCENE) {
    const newId = shortid.generate();

    return Object.assign({}, state, {
      currentSceneId: newId,
      scenes: [
        ...state.scenes,
        {
          id: newId,
          title: action.payload.title,
          editing: true,
          userCharacter: 'all',
          lines: []
        }
      ]
    });
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
                id: shortid.generate(),
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
  } else if(action.type === actions.READ_LINE_REQUEST) {
    return Object.assign({}, state, { loading: true, error: null });
  } else if(action.type === actions.READ_LINE_SUCCESS) {
    return Object.assign({}, state, { loading: false });
  } else if(action.type === actions.READ_LINE_ERROR) {
    return Object.assign({}, state, { loading: false, error: action.payload.err });
  }
  return state;
};
