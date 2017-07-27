import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import {
  DmSignState,
  dmGetSignState,
} from '@brightsign/bsdatamodel';

import reducers from './store/reducers';

import { bpfToJson } from './bpfToJson';
import { createSign } from './signBuilder';

export default function importBPF(xmlBuffer: string): Promise<DmSignState> {

  const store = createStore(
    reducers,
    applyMiddleware(
      thunkMiddleware,
    ),
  );

  return executeImportBPF(xmlBuffer, store.dispatch, store.getState);
}

function executeImportBPF(xmlBuffer: string, dispatch: Function, getState: Function): Promise<DmSignState> {
  return new Promise( (resolve, reject) => {
    bpfToJson(xmlBuffer).then( (bpf : any) => {
      createSign(bpf, dispatch, getState);
      const signState: DmSignState = dmGetSignState(getState().bsdm);
      resolve(signState);
    });
  })
}

