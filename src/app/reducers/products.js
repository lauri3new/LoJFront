
const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCTS_SUCCESS":
    return state.slice(1,2).concat(action.payload)
    // .map((a,i) => { if (i === 0) {return {...a, ok:true}} else return {...a, ok:false} })
      break;
  }
  return state
}

export default productsReducer
