import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './store/reducers';

import { importBPF } from './bpfImporter';

console.log('pizza');

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
  ),
);

importBPF('foo', store.dispatch, store.getState);
