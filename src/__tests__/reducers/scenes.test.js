import scenePartnerReducer from '../../reducers/scenes';
import * as actions from '../../actions/scenes';

describe('scenePartnerReducer', function() {
  it('Should set initial state when nothing is passed in', function() {
    const state = scenePartnerReducer(undefined, { type: null });
    expect(state).toEqual({
      currentSceneId: null,
      loading: false,
      error: null,
      scenes: []
    });
  });

  it('Should set loading on getScenesRequest', function() {
    const state = scenePartnerReducer(undefined, actions.getScenesRequest());
    expect(state.loading).toEqual(true);
    expect(state.error).toEqual(null);
  });

  it('Should set scenes property on getScenesSuccess', function() {
    const scenes = [{ title: 'Hamlet' }, { title: 'Othello' }];
    const state = scenePartnerReducer(undefined, actions.getScenesSuccess(scenes));
    expect(state.scenes[0].title).toEqual('Hamlet');
    expect(state.scenes[1].title).toEqual('Othello');
  });

  it('Should set error on getScenesError', function() {
    const error = 'A terrible error';
    const state = scenePartnerReducer(undefined, actions.getScenesError(error));
    expect(state.error).toEqual(error);
  });

  it('Should set loading on addSceneRequest', function() {
    const state = scenePartnerReducer(undefined, actions.addSceneRequest());
    expect(state.loading).toEqual(true);
    expect(state.error).toEqual(null);
  });

  it('Should add a scene to the state on addSceneSuccess', function() {
    const newScene = { title: 'Guys and Dolls' };

    let state = { scenes: [{ title: 'Coriolanus' }] };
    state = scenePartnerReducer(state, actions.addSceneSuccess(newScene));
    expect(state.scenes[1].title).toEqual('Guys and Dolls');
  });

  it('Should set error on addSceneError', function() {
    const error = 'A terrible error';
    const state = scenePartnerReducer(undefined, actions.addSceneError(error));
    expect(state.error).toEqual(error);
  });

  it('Should delete scene from state on deleteSceneSuccess', function() {
    let state = { scenes: [{ title: 'Waitress', id: 42 }, { title: 'GoT', id: 7 }] };
    state = scenePartnerReducer(state, actions.deleteSceneSuccess(42));
    expect(state.scenes[0].title).toEqual('GoT');
    expect(state.scenes.length).toEqual(1);
  });

  it('Should set error on deleteSceneError', function() {
    const error = 'A terrible error';
    const state = scenePartnerReducer(undefined, actions.deleteSceneError(error));
    expect(state.error).toEqual(error);
  });

  it('Should toggle the current scenes editing property on toggleEditing', function() {
    let state = {
      currentSceneId: 42,
      scenes: [{
        title: 'Waitress',
        id: 42,
        editing: true
      }, {
        title: 'GoT',
        id: 7,
        editing: true
      }]
    };
    state = scenePartnerReducer(state, actions.toggleEditing());
    expect(state.scenes[0].editing).toEqual(false);
    expect(state.scenes[1].editing).toEqual(true);
  });

  it('Should change a specific line on changeLine', function() {
    let state = {
      currentSceneId: 1,
      loading: false,
      error: null,
      scenes: [{ id: 1, lines: [{ character: 'Stan', text: 'Hi' }] },
        { id: 42, lines: [{ character: 'Claire', text: 'Yo' }, { character: 'BB-8', text: 'Hey' }] }
      ]
    };
    const newCharacter = 'Greg';
    const newText = 'Howdy';
    const lineIndex = 1;
    const sceneId = 42;

    state = scenePartnerReducer(state,
      actions.changeLine(newCharacter, newText, lineIndex, sceneId));

    expect(state.scenes[1].lines[1].character).toEqual(newCharacter);
    expect(state.scenes[1].lines[1].text).toEqual(newText);
  });

  it('Should delete a specific line on deleteLine', function() {
    let state = {
      currentSceneId: 1,
      loading: false,
      error: null,
      scenes: [{ id: 1, lines: [{ character: 'Stan', text: 'Hi' }] },
        { id: 42, lines: [{ character: 'Claire', text: 'Yo' }, { character: 'BB-8', text: 'Hey' }] }
      ]
    };
    const lineIndex = 1;
    const sceneId = 42;
    state = scenePartnerReducer(state, actions.deleteLine(lineIndex, sceneId));
    expect(state.scenes[1].lines.length).toEqual(1);
    expect(state.scenes[1].lines[0].character).toEqual('Claire');
  });

  it('Should add new line on addLineSuccess', function() {
    let state = {
      currentSceneId: 1,
      loading: false,
      error: null,
      scenes: [{ id: 1, lines: [{ character: 'Stan', text: 'Hi' }] },
        { id: 42, lines: [{ character: 'Claire', text: 'Yo' }, { character: 'BB-8', text: 'Hey' }] }
      ]
    };
    const sceneId = 1;
    const newLine = { character: 'Marge', text: 'Kids these days' };
    state = scenePartnerReducer(state, actions.addLineSuccess(sceneId, newLine));
    expect(state.scenes[0].lines.length).toEqual(2);
    expect(state.scenes[0].lines[1].character).toEqual(newLine.character);
    expect(state.scenes[0].lines[1].text).toEqual(newLine.text);
  });

  it('Should update the current userCharacter on selectCharacter', function() {
    let state = {
      currentSceneId: 1,
      loading: false,
      error: null,
      scenes: [{ id: 1, lines: [{ character: 'Stan', text: 'Hi' }] },
        { id: 42, userCharacter: 'BB-8,', lines: [{ character: 'Claire', text: 'Yo' }, { character: 'BB-8', text: 'Hey' }] }
      ]
    };
    const newCharacter = 'Claire';
    const sceneId = 42;
    state = scenePartnerReducer(state, actions.selectCharacter(newCharacter, sceneId));
    expect(state.scenes[1].userCharacter).toEqual(newCharacter);
  });

  it('Should update the scene on updateSceneSuccess', function() {
    let state = {
      currentSceneId: 1,
      loading: false,
      error: null,
      scenes: [{ id: 1, lines: [{ character: 'Stan', text: 'Hi' }] },
        { id: 42, lines: [{ character: 'Claire', text: 'Yo' }, { character: 'BB-8', text: 'Hey' }] }
      ]
    };
    const updatedScene = { id: 1, lines: [{ character: 'Me', text: 'No' }], newProp: true};
    state = scenePartnerReducer(state, actions.updateSceneSuccess(updatedScene));
    expect(state.scenes[0].lines[0].character).toEqual('Me');
    expect(state.scenes[0].lines[0].text).toEqual('No');
    expect(state.scenes[0].newProp).toEqual(true);
  });

  it('Should set error on updateSceneError', function() {
    const error = 'A terrible error';
    const state = scenePartnerReducer(undefined, actions.updateSceneError(error));
    expect(state.error).toEqual(error);
  });

  it('Should set loading on fetchUrlRequest', function() {
    const state = scenePartnerReducer(undefined, actions.fetchUrlRequest());
    expect(state.loading).toEqual(true);
    expect(state.error).toEqual(null);
  });

  it('Should set the url property of the given line on fetchUrlSuccess', function() {
    let state = {
      currentSceneId: 42,
      loading: false,
      error: null,
      scenes: [{ id: 1, lines: [{ character: 'Stan', text: 'Hi' }] },
        { id: 42, lines: [{ character: 'Claire', text: 'Yo' }, { character: 'BB-8', text: 'Hey' }] }
      ]
    };
    const url = 'http://test_url';
    const lineIndex = 1;
    state = scenePartnerReducer(state, actions.fetchUrlSuccess(url, lineIndex));
    expect(state.scenes[1].lines[1].url).toEqual(url);
  });

  it('Should set error on fetchUrlError', function() {
    const error = 'A terrible error';
    const state = scenePartnerReducer(undefined, actions.fetchUrlError(error));
    expect(state.error).toEqual(error);
  });
});
