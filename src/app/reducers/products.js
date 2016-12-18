
const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCTS_SUCCESS":
    return state.slice(2,6).concat(action.payload)
      break;
  }
  return state
}

export default productsReducer
