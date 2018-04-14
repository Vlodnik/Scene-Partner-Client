const initialState = {
  userCharacter: null,
  scenes: [{
    id: 0,
    title: 'Funky Chicken Scene',
    lines: [{
      character: 'Mr. Chicken',
      text: 'Hello, I am a chicken!'
    }, {
      character: 'Mr. Chicken',
      text: 'I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken! I am still a chicken!'
    }, {
      character: 'A Duck',
      text: 'Behold, my chicken-ly splendor!'
    }]
  }, {
    id: 1,
    title: 'Hamlet',
    lines: [{
      character: 'Hamlet',
      text: 'Romeo, Romeo, hello there Romeo.'
    }, {
      character: 'Romeo',
      text: 'Oh Juliet! I am Hamlet.'
    }]
  }, {
    id: 2,
    title: 'Wicked: Popular',
    lines: [{
      character: 'Elfaba',
      text: 'Wow! I\'m flying! But I don\'t know what I\'m reading.'
    }]
  }, {
    id: 3,
    title: 'Who\'s Afraid of Virginia Woolf',
    lines: [{
      character: 'Joanne?',
      text: 'Is that my name? That feels wrong.'
    }, {
      character: 'Virginia Woolf',
      text: 'Geez, I don\'t know. I\'m dead!'
    }]
  }]
};

export const scenePartnerReducer = (state=initialState) => {
  return state;
};
