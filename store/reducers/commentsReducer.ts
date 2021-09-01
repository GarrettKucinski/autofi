import initialState from "../initialState"
import createReducer from "./createReducer"

const HANDLERS = {
  updateComments: state => state
}

export default createReducer(initialState.comments, HANDLERS);
