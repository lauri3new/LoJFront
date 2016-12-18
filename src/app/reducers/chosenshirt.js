
const chosenReducer = (state = {}, action) => {
  switch (action.type) {
    case "SHIRT_CHOSEN":
    state = {chosen: action.payload}
      break;
  }
  return state
}

export default chosenReducer
