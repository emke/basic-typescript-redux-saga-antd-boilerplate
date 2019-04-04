import { put, takeLatest } from 'redux-saga/effects'

import Types from './types'
import Actions from './actions'

function* fetchDummy({type, payload}:{type: string, payload?: any}) {
  yield put(Actions.dummySuccess({this: 'is success'}))
} 

function* dummySaga() {
  yield takeLatest(Types.DUMMY_REQUEST, fetchDummy)
}

export default dummySaga;
