import * as actions from './actions';

const initialState = {
  currentSceneId: null,
  scenes: [{
    id: 0,
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
    title: 'Wicked: Popular',
    userCharacter: 'all',
    lines: [{
      character: 'ELFABA',
      text: 'Wow! I\'m flying! But I don\'t know what I\'m reading.'
    }]
  }, {
    id: 3,
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
    console.log('updating currentSceneId');
    return Object.assign({}, state, {
      currentSceneId: action.payload.sceneId
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
                text: action.payload.line
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
