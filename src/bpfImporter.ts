import * as path from 'path';
import * as fse from 'fs-extra';
// import * as fs from 'fs';
const xml2js : any = require('xml2js');

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import {
  DmSignState,
  dmGetSignState,
} from '@brightsign/bsdatamodel';


import reducers from './store/reducers';

import { bpfToJson } from './bpfToJson';
import { createSign } from './signBuilder';

export default function importBPF(bpfFilePath: string): Promise<any> {

  console.log('importBPF entry');

  const store = createStore(
    reducers,
    applyMiddleware(
      thunkMiddleware,
    ),
  );

  return executeImportBPF(bpfFilePath, store.dispatch, store.getState);
}

function executeImportBPF(bpfFilePath: string, dispatch: Function, getState: Function): Promise<any> {

  return new Promise( (resolve, reject) => {
    readFile(bpfFilePath).then( (bpfBuf : any) => {
      return bpfToJson(bpfBuf);
    }).then((bpf : any) => {
      console.log(bpf);
      createSign(bpf, dispatch, getState);

      // sign in bsdm has been created - write it to a file
      // let basename : string = path.basename(bpfFilePath);
      let basename : string = path.basename(bpfFilePath, '.bpf');
      let dirname : string = path.dirname(bpfFilePath);
      let extname : string = path.extname(bpfFilePath);
      // let parsedPath : any = path.parse(bpfFilePath);

      // const bpfxPath = path.join(dirname, parsedPath.name + ".bpfx");
      const bpfxPath = path.join(dirname, basename + '.bpfx');

      let signState: DmSignState = dmGetSignState(getState().bsdm);

      const bpfStr = JSON.stringify(signState, null, '\t');
      fse.writeFile(bpfxPath, bpfStr, (err) => {
        if(err)
          reject(err);
        else
          resolve(bpf);
      });

      resolve(bpf);
    });
  })

}

function readFile(filePath : string) : Promise<Buffer> {

  return new Promise( (resolve, reject) => {
    fse.readFile(filePath, (err, buf) => {
      if (err) {
        reject(err);
      }
      resolve(buf);
    });
  })
}


