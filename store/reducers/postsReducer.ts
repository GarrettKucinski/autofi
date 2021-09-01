import initialState from "../initialState"
import createReducer from "./createReducer"

const HANDLERS = {
  updatePosts: (state, payload) => ([ ...state, ...payload ])
}

export default createReducer(initialState.posts, HANDLERS);
