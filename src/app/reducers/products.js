
const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCTS_SUCCESS":
    return state.concat(action.payload)
    .slice(1,-1)
    .map((a,i) => { if (i === 0) {return {...a, ok:true}} else return {...a, ok:false} })
      break;
  }
  return state
}

export default productsReducer
