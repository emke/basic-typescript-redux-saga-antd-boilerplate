import Types from './types'

const initialState: any = {
  dummyInitial: false
}

export default function dummyreducer(state = initialState, action: any): any {
  switch (action.type) {
    case [Types.DUMMY_REQUEST]:
      return { ...state, dummyInitial: true }
    case [Types.DUMMY_SUCCESS]:
      return { ...state, dummyInitial: false }
    case [Types.DUMMY_ERROR]:
      return { ...state, dummyInitial: false }
    default:
      return state
  }
}
