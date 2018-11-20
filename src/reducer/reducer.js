// Init State
const initialState = {
  currencies: [],
  load: false
};

// Create Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_CURR':
      return {
        ...state,
        load: true,
        currencies: action.payload,
      }
    default:
      return state
  }
}

export default reducer