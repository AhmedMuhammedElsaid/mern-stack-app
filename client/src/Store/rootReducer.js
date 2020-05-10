import actionType from "./Types";

let initialState = { data: {}, error: "" };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case actionType.FETCH_DATA_FAILED:
      return {
        ...state,
        error: action.message,
      };
    default:
      return state;
  }
};
export default rootReducer;
