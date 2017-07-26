import {combineReducers} from 'redux';
import {
  bsDmReducer,
  DmState,
} from '@brightsign/bsdatamodel';

interface ArState {
  bsdm : DmState;
}

const rootReducer = combineReducers<ArState>({
  bsdm : bsDmReducer,
});

export default rootReducer;

