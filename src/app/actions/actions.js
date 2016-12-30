export const getData = (path = "random/") => {
  const baseUrl = "http://localhost:3001/";
  return (dispatch) => {
    dispatch(getRequest());
    return fetch(baseUrl + path)
  .then(
    (response) => {
      if (response.status !== 200) {
        throw new Error(response.status + " " + response.statusText);
      }
      return response.json();
    })
  .then((json) => {
    dispatch(getRequestSuccess(json));
  })
  .catch((err) => {
    dispatch(getRequestFailure(err));
  });
  };
};

// fetch request
const getRequest = () => ({
  type: `GET_REQUEST`
});

// fetch sucess
const getRequestSuccess = data => ({
  type: "GET_PRODUCTS_SUCCESS",
  payload: data
});

// fetch failure
const getRequestFailure = err => ({
  type: `GET_REQUEST_FAILURE`,
  payload: err.message || "Something went wrong"
});

export const selectWinner = (ID) => {
  return (dispatch) => {
    dispatch(chosenShirt(ID));
  };
};

const chosenShirt = ID => ({
  type: `SHIRT_CHOSEN`,
  payload: `okokok ${ID}`
});
