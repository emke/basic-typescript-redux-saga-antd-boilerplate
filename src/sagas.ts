import { all } from 'redux-saga/effects'

import dummySaga from './containers/Dummy/saga'

function* rootSaga() {
  yield all([
    dummySaga(),
  ])
}

export default rootSaga
