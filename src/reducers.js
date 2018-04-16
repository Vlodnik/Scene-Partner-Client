import * as actions from './actions';

const initialState = {
  currentSceneId: null,
  scenes: [{
    id: 0,
    editing: false,
    title: 'Funky Chicken Scene',
    userCharacter: 'all',
    lines: [{
      character: 'MR. CHICKEN',
      text: 'Hello, I am a chicken!'
    }, {
      character: 'MR. CHICKEN',
      text: 'I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken!'
    }, {
      character: 'A DUCK',
      text: 'Behold, my chicken-ly splendor!'
    }]
  }, {
    id: 1,
    editing: false,
    title: 'Hamlet',
    userCharacter: 'all',
    lines: [{
      character: 'HAMLET',
      text: 'Romeo, Romeo, hello there Romeo.'
    }, {
      character: 'ROMEO',
      text: 'Oh Juliet! I am Hamlet.'
    }]
  }, {
    id: 2,
    editing: false,
    title: 'Wicked: Popular',
    userCharacter: 'all',
    lines: [{
      character: 'ELFABA',
      text: 'Wow! I\'m flying! But I don\'t know what I\'m reading.'
    }]
  }, {
    id: 3,
    editing: false,
    title: 'Who\'s Afraid of Virginia Woolf',
    userCharacter: 'all',
    lines: [{
      character: 'JOANNE',
      text: 'Is that my name? That feels wrong.'
    }, {
      character: 'VIRGINIA WOOLF',
      text: 'Geez, I don\'t know. I\'m dead!'
    }]
  }]
};

export const scenePartnerReducer = (state=initialState, action) => {
  console.log(state);
  if(action.type === actions.ADD_SCENE) {
    const nextId = state.scenes.reduce(function(prev, current) {
      return (prev.id > current.id) ? prev.id : current.id;
    }) + 1;
    return Object.assign({}, state, {
      currentSceneId: nextId,
      scenes: [
        ...state.scenes,
        {
          id: nextId,
          title: action.payload.title,
          userCharacter: 'all',
          lines: []
        }
      ]
    });
  } else if(action.type === actions.CHANGE_SCENE) {
    console.log('updating currentSceneId to ' + action.payload.sceneId);
    return Object.assign({}, state, {
      currentSceneId: action.payload.sceneId
    });
  } else if(action.type === actions.TOGGLE_EDITING) {
    console.log('reducer is toggling editing');
    const targetScene = state.scenes.find(scene => scene.id === state.currentSceneId);
    const toggled = targetScene.editing ? false : true;
    console.log(toggled);
    return Object.assign({}, state, {
      scenes: state.scenes.map(function(scene) {
        console.log(scene);
        if(scene.id === state.currentSceneId) {
          return {
            ...scene,
            editing: toggled
          }
        }
        return scene;
      })
    });
  }
  // else if(action.type === actions.CHANGE_CHARACTER) {
  //   console.log('received CHANGE_CHARACTER action', 'the currentSceneId is: ' + state.currentSceneId);
  //   return Object.assign({}, state, {
  //     scenes: state.scenes.map(function(scene) {
  //       if(scene.id === state.currentSceneId) {
  //         console.log('found the current scene');
  //         const { lineIndex, character } = action.payload;
  //         let newScene = Object.assign({}, scene);
  //         newScene.lines[lineIndex].character = character;
  //         console.log(newScene);
  //         return newScene;
  //       }
  //       return scene;
  //     })
  //   });
  // }
  else if(action.type === actions.CHANGE_LINE) {
    const { sceneId, lineIndex, character, text } = action.payload
    console.log(action.payload);

    const targetScene = state.scenes.find(scene => scene.id === sceneId);
    let newLines = [...targetScene.lines];
    newLines[lineIndex] = {
      character,
      text
    };

    console.log('received CHANGE_LINE action');
    return Object.assign({}, state, {
      scenes: state.scenes.map(function(scene) {
        if(scene.id === sceneId) {
          const newScene = Object.assign({}, scene, {
            lines: newLines
          });
          return newScene;
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
  }
  return state;
};
