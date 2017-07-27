import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './store/reducers';

export default function importBPF(bpfFilePath: string): Promise<any> {

  console.log('importBPF entry');

  const store = createStore(
    reducers,
    applyMiddleware(
      thunkMiddleware,
    ),
  );

  return new Promise( (resolve) => {
    console.log('importBPF promise resolved');
    resolve();
  })
}
