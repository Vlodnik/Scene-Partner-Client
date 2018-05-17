import { createAccount } from '../../actions/users';
import { REACT_APP_BASE_URL } from '../../config';

describe('createAccount', function() {
  it('Should make a POST fetch with new user data', function() {
    const spyFetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          Id: 'idString',
          json: () => new Promise((resolve, reject) => {
            resolve({ authToken: 'jwt' })
          })
        })
      });
      return p;
    });
    global.fetch = spyFetch;
    const dispatch = jest.fn();

    const returnedFunction = createAccount({ user: 'testUser' });

    expect.assertions(3);
    return returnedFunction(dispatch).then(data => {
      expect(spyFetch.mock.calls[0][0]).toEqual(`${ REACT_APP_BASE_URL }/users`);
      expect(spyFetch.mock.calls[0][1].method).toEqual('POST');
      expect(JSON.parse(spyFetch.mock.calls[0][1].body).user).toEqual('testUser');
    });
  });
});
