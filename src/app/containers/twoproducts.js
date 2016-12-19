import React from "react";
import Product from "../components/product.js";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TwoProducts = (props) => (
  <div>
  {props.products.map((product,i) => {
    return <Product
              onClick={props.onClick}
              leftRight={i == 0 ? {marginLeft: '50%' } : null}
              key={i.toString()}
              style={ (props.keyo==0) ? props.style.style : props.style.styleB}
              boxStyle={props.boxStyle}
              image={product.ImageLink}
              URL={product.buyLink}
              Price={product.Price}
              ID={product.ID}/>
    })
  }
  </div>
)

export default TwoProducts;
