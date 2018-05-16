import * as actions from '../../actions/scenes';
import { REACT_APP_BASE_URL } from '../../config';

// beforeEach(function() {
//   global.fetch = jest.fn().mockImplementation(() => {
//     const p = new Promise((resolve, reject) => {
//       resolve({
//         ok: true,
//         Id: 'idString',
//         json: new Promise((resolve, reject) => {
//           resolve({Id: 'jsonId'});
//         })
//       });
//     });
//     return p;
//   });
// });

describe('getScenes', function() {
  it('Should fetch scenes', function() {
    const spyFetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve, reject) => {
            resolve({
              ok: true,
              Id: 'idString',
              json: () => { Id: 'jsonId' }
            });
          });
          return p;
    });
    global.fetch = spyFetch;
    const dispatch = jest.fn();
    const returnedFunction = actions.getScenes('jwt');

    expect.assertions(5);
    return returnedFunction(dispatch).then(data => {
      expect(spyFetch.mock.calls[0][0]).toEqual(`${ REACT_APP_BASE_URL }/scenes`);
      expect(spyFetch.mock.calls[0][1].method).toEqual('GET');
      expect(spyFetch.mock.calls[0][1].headers.Authorization).toEqual('Bearer jwt');
      expect(dispatch.mock.calls[0][0].type).toEqual('GET_SCENES_REQUEST');
      expect(dispatch.mock.calls[1][0].type).toEqual('GET_SCENES_SUCCESS');
    });
  });
});

describe('getScenesRequest', function() {
  it('Should return the action', function() {
    const action = actions.getScenesRequest();
    expect(action.type).toEqual(actions.GET_SCENES_REQUEST);
  });
});

describe('getScenesSuccess', function() {
  it('Should return the action', function() {
    const scenes = 'scenes';
    const action = actions.getScenesSuccess(scenes);
    expect(action.type).toEqual(actions.GET_SCENES_SUCCESS);
    expect(action.payload.scenes).toEqual('scenes');
  });
});

describe('getScenesError', function() {
  it('Should return the action', function() {
    const err = 'err';
    const action = actions.getScenesError(err);
    expect(action.type).toEqual(actions.GET_SCENES_ERROR);
    expect(action.payload.err).toEqual('err');
  });
});

describe('addScene', function() {
  it('Should make a POST fetch with new scene title', function() {
    const spyFetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve, reject) => {
            resolve({
              ok: true,
              Id: 'idString',
              json: () => { Id: 'jsonId' }
            });
          });
          return p;
    });
    global.fetch = spyFetch;
    const dispatch = jest.fn();
    const returnedFunction = actions.addScene('title', 'jwt');

    expect.assertions(6);
    return returnedFunction(dispatch).then(data => {
      expect(spyFetch.mock.calls[0][0]).toEqual(`${ REACT_APP_BASE_URL }/scenes`);
      expect(spyFetch.mock.calls[0][1].method).toEqual('POST');
      expect(spyFetch.mock.calls[0][1].headers.Authorization).toEqual('Bearer jwt');
      expect(JSON.parse(spyFetch.mock.calls[0][1].body).title).toEqual('title');
      expect(dispatch.mock.calls[0][0].type).toEqual('ADD_SCENE_REQUEST');
      expect(dispatch.mock.calls[1][0].type).toEqual('ADD_SCENE_SUCCESS');
    });
  });
});

describe('addSceneRequest', function() {
  it('Should return the action', function() {
    const action = actions.addSceneRequest();
    expect(action.type).toEqual(actions.ADD_SCENE_REQUEST);
  });
});

describe('addSceneSuccess', function() {
  it('Should return the action', function() {
    const scene = 'scene';
    const action = actions.addSceneSuccess(scene);
    expect(action.type).toEqual(actions.ADD_SCENE_SUCCESS);
    expect(action.payload.newScene).toEqual('scene');
  });
});

describe('addSceneError', function() {
  it('Should return the action', function() {
    const err = 'err';
    const action = actions.addSceneError(err);
    expect(action.type).toEqual(actions.ADD_SCENE_ERROR);
    expect(action.payload.err).toEqual('err');
  });
});

describe('changeLine', function() {
  it('Should return the action', function() {
    const character = 'character';
    const text = 'text';
    const lineIndex = 1;
    const sceneId = 3;
    const action = actions.changeLine(character, text, lineIndex, sceneId);
    expect(action.type).toEqual(actions.CHANGE_LINE);
    expect(action.payload.character).toEqual(character);
    expect(action.payload.text).toEqual(text);
    expect(action.payload.lineIndex).toEqual(lineIndex);
    expect(action.payload.sceneId).toEqual(sceneId);
  });
});

describe('updateScene', function() {
  it('Should make a PUT fetch with new scene data', function() {
    const spyFetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve, reject) => {
            resolve({
              ok: true,
              Id: 'idString',
              json: () => { Id: 'jsonId' }
            });
          });
          return p;
    });
    global.fetch = spyFetch;
    const dispatch = jest.fn();
    const updateObj = { id: 42 };
    const returnedFunction = actions.updateScene(updateObj, 'jwt');

    expect.assertions(6);
    return returnedFunction(dispatch).then(data => {
      expect(spyFetch.mock.calls[0][0]).toEqual(`${ REACT_APP_BASE_URL }/scenes/${ updateObj.id }`);
      expect(spyFetch.mock.calls[0][1].method).toEqual('PUT');
      expect(spyFetch.mock.calls[0][1].headers.Authorization).toEqual('Bearer jwt');
      expect(JSON.parse(spyFetch.mock.calls[0][1].body).id).toEqual(42);
      expect(dispatch.mock.calls[0][0].type).toEqual('UPDATE_SCENE_REQUEST');
      expect(dispatch.mock.calls[1][0].type).toEqual('UPDATE_SCENE_SUCCESS');
    });
  });
});

describe('updateSceneRequest', function() {
  it('Should return the action', function() {
    const action = actions.updateSceneRequest();
    expect(action.type).toEqual(actions.UPDATE_SCENE_REQUEST);
  });
});

describe('updateSceneSuccess', function() {
  it('Should return the action', function() {
    const scene = 'scene';
    const action = actions.updateSceneSuccess(scene);
    expect(action.type).toEqual(actions.UPDATE_SCENE_SUCCESS);
    expect(action.payload.updatedScene).toEqual('scene');
  });
});

describe('updateSceneError', function() {
  it('Should return the action', function() {
    const err = 'err';
    const action = actions.updateSceneError(err);
    expect(action.type).toEqual(actions.UPDATE_SCENE_ERROR);
    expect(action.payload.err).toEqual('err');
  });
});

describe('deleteScene', function() {
  it('Should make a DELETE fetch', function() {
    const spyFetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve, reject) => {
            resolve({
              ok: true,
              Id: 'idString',
              json: () => { Id: 'jsonId' }
            });
          });
          return p;
    });
    global.fetch = spyFetch;
    const dispatch = jest.fn();
    const sceneId = 42;
    const returnedFunction = actions.deleteScene(sceneId, 'jwt');

    expect.assertions(5);
    return returnedFunction(dispatch).then(data => {
      expect(spyFetch.mock.calls[0][0]).toEqual(`${ REACT_APP_BASE_URL }/scenes/${ sceneId }`);
      expect(spyFetch.mock.calls[0][1].method).toEqual('DELETE');
      expect(spyFetch.mock.calls[0][1].headers.Authorization).toEqual('Bearer jwt');
      expect(dispatch.mock.calls[0][0].type).toEqual('DELETE_SCENE_REQUEST');
      expect(dispatch.mock.calls[1][0].type).toEqual('DELETE_SCENE_SUCCESS');
    });
  });
});

describe('deleteSceneRequest', function() {
  it('Should return the action', function() {
    const action = actions.deleteSceneRequest();
    expect(action.type).toEqual(actions.DELETE_SCENE_REQUEST);
  });
});

describe('deleteSceneSuccess', function() {
  it('Should return the action', function() {
    const sceneId = 42;
    const action = actions.deleteSceneSuccess(sceneId);
    expect(action.type).toEqual(actions.DELETE_SCENE_SUCCESS);
    expect(action.payload.sceneId).toEqual(42);
  });
});

describe('deleteSceneError', function() {
  it('Should return the action', function() {
    const err = 'err';
    const action = actions.deleteSceneError(err);
    expect(action.type).toEqual(actions.DELETE_SCENE_ERROR);
    expect(action.payload.err).toEqual('err');
  });
});

describe('changeScene', function() {
  it('Should return the action', function() {
    const sceneId = 42;
    const action = actions.changeScene(sceneId);
    expect(action.type).toEqual(actions.CHANGE_SCENE);
    expect(action.payload.sceneId).toEqual(42);
  })
});

describe('toggleEditing', function() {
  it('Should return the action', function() {
    const action = actions.toggleEditing();
    expect(action.type).toEqual(actions.TOGGLE_EDITING);
  });
});

describe('addLine', function() {
  it('Should make a PUT fetch with new line', function() {
    const spyFetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve, reject) => {
            resolve({
              ok: true,
              Id: 'idString',
              json: () => { Id: 'jsonId' }
            });
          });
          return p;
    });
    global.fetch = spyFetch;
    const dispatch = jest.fn();
    const updateObj = { id: 42 };
    const jwt = 'jwt';
    const sceneId = 42;
    const newLine = 'line';

    const returnedFunction = actions.addLine(updateObj, jwt, sceneId, newLine);

    expect.assertions(6);
    return returnedFunction(dispatch).then(data => {
      expect(spyFetch.mock.calls[0][0]).toEqual(`${ REACT_APP_BASE_URL }/scenes/${ sceneId }`);
      expect(spyFetch.mock.calls[0][1].method).toEqual('PUT');
      expect(spyFetch.mock.calls[0][1].headers.Authorization).toEqual('Bearer jwt');
      expect(JSON.parse(spyFetch.mock.calls[0][1].body).id).toEqual(42);
      expect(dispatch.mock.calls[0][0].type).toEqual('ADD_LINE_REQUEST');
      expect(dispatch.mock.calls[1][0].type).toEqual('ADD_LINE_SUCCESS');
    });
  });
});

describe('addLineRequest', function() {
  it('Should return the action', function() {
    const action = actions.addLineRequest();
    expect(action.type).toEqual(actions.ADD_LINE_REQUEST);
  });
});

describe('addLineSuccess', function() {
  it('Should return the action', function() {
    const sceneId = 42;
    const newLine = 'line';
    const action = actions.addLineSuccess(sceneId, newLine);
    expect(action.type).toEqual(actions.ADD_LINE_SUCCESS);
    expect(action.payload.sceneId).toEqual(42);
    expect(action.payload.newLine).toEqual('line');
  });
});

describe('addLineError', function() {
  it('Should return the action', function() {
    const err = 'err';
    const action = actions.addLineError(err);
    expect(action.type).toEqual(actions.ADD_LINE_ERROR);
    expect(action.payload.err).toEqual('err');
  });
});

describe('deleteLine', function() {
  it('Should return the action', function() {
    const lineIndex = 2;
    const sceneId = 42;
    const action = actions.deleteLine(lineIndex, sceneId);
    expect(action.type).toEqual(actions.DELETE_LINE);
    expect(action.payload.lineIndex).toEqual(2);
    expect(action.payload.sceneId).toEqual(42);
  });
});

describe('selectCharacter', function() {
  it('Should return the action', function() {
    const character = 'Justin';
    const sceneId = 42;
    const action = actions.selectCharacter(character, sceneId);
    expect(action.type).toEqual(actions.SELECT_CHARACTER);
    expect(action.payload.character).toEqual('Justin');
    expect(action.payload.sceneId).toEqual(42);
  });
});

describe('fetchUrl', function() {
  it('Should make a POST fetch with line data', function() {
    const spyFetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve, reject) => {
            resolve({
              ok: true,
              Id: 'idString',
              json: () => new Promise((resolve, reject) => {
                resolve({ url: 'newUrl' })
              })
            });
          });
          return p;
    });
    global.fetch = spyFetch;
    const dispatch = jest.fn();

    const text = 'My name is Inigo Montoya';
    const lineId = '1a1a1a';
    const jwt = 'jwt';
    const lineIndex = 4;

    const returnedFunction = actions.fetchUrl(text, lineId, jwt, lineIndex);

    expect.assertions(7);
    return returnedFunction(dispatch).then(data => {
      expect(spyFetch.mock.calls[0][0]).toEqual(`${ REACT_APP_BASE_URL }/audio`);
      expect(spyFetch.mock.calls[0][1].method).toEqual('POST');
      expect(spyFetch.mock.calls[0][1].headers.Authorization).toEqual('Bearer jwt');
      expect(JSON.parse(spyFetch.mock.calls[0][1].body).text).toEqual(text);
      expect(JSON.parse(spyFetch.mock.calls[0][1].body).lineId).toEqual(lineId);
      expect(dispatch.mock.calls[0][0].type).toEqual('FETCH_URL_REQUEST');
      expect(dispatch.mock.calls[1][0].type).toEqual('FETCH_URL_SUCCESS');
    });
  });
});

describe('fetchUrlRequest', function() {
  it('Should return the action', function() {
    const action = actions.fetchUrlRequest();
    expect(action.type).toEqual(actions.FETCH_URL_REQUEST);
  });
});

describe('fetchUrlSuccess', function() {
  it('Should return the action', function() {
    const url = 'http://hello_there';
    const lineIndex = 42;
    const action = actions.fetchUrlSuccess(url, lineIndex);
    expect(action.type).toEqual(actions.FETCH_URL_SUCCESS);
    expect(action.payload.url).toEqual(url);
    expect(action.payload.lineIndex).toEqual(lineIndex);
  });
});

describe('fetchUrlError', function() {
  it('Should return the action', function() {
    const err = 'err';
    const action = actions.fetchUrlError(err);
    expect(action.type).toEqual(actions.FETCH_URL_ERROR);
    expect(action.payload.err).toEqual('err');
  });
});
