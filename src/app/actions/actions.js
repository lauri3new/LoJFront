export const getData = (path = "random") => {
  let baseUrl = "http://localhost:3001/";
  return (dispatch) => {
    dispatch(getRequest());
    return fetch(baseUrl + path)
  .then(
    response => {
      if (response.status !== 200) {
        throw new Error(response.status + " " + response.statusText)
      }
      return response.json()
    })
  .then( json => {
    dispatch(getRequestSuccess(json));
  })
  .catch(function(err) {
    dispatch(getRequestFailure(err));
  })
  }
}

// fetch request
const getRequest = () => ({
  type: `GET_REQUEST`
})
// fetch sucess
const getRequestSuccess = (data) => ({
  type: "GET_PRODUCTS_SUCCESS",
  payload : data
})
// fetch failure
const getRequestFailure = (err) => ({
  type: `GET_REQUEST_FAILURE`,
  payload: err.message || "Something went wrong"
})

export const selectWinner = () => {
  return (dispatch) => {
    dispatch(chosenShirt())
  }
}

const chosenShirt = () => ({
  type : `SHIRT_CHOSEN`,
  payload : `okokok`
})
