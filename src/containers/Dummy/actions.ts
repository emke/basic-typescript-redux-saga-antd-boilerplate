import Types from './types'

export default {
  dummyRequest: (payload: any) => ({
    type: Types.DUMMY_REQUEST,
    payload
  }),
  dummySuccess: (payload: any) => ({
    type: Types.DUMMY_SUCCESS,
    payload
  }),
  dummyError: (payload: any) => ({
    type: Types.DUMMY_ERROR,
    payload
  }),
}