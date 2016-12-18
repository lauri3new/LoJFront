import chai from 'chai';
import nock from 'nock';
var expect = chai.expect;
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

// describe('clearErr', () => {
//   it('dispatches clear error action', () => {
//   })
// });
