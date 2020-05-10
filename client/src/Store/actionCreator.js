import actionType from "./Types";

const API = "http://localhost:4000/api/";

const getData = ()=> {
  return (dispatch) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: actionType.FETCH_DATA_SUCCESS, data: data });
      })
      .catch((err) => {
        dispatch({ type: actionType.FETCH_DATA_FAILED, message: err });
      });
  };
};

export default getData;
