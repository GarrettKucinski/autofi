type Action = {
  type: string
  payload: any
}

export default function createReducer(initialState: {}, handlers: {}) {
  return function reducer(state = initialState, action: Action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action.payload);
    } else {
      return state;
    }
  };
}
