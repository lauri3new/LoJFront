import React from "react";
import Product from "../components/product.js";
import Styles from "./twoproducts.css";

const TwoProducts = (props) => (
  <div className={Styles.twoProducts}>
  {props.products.map((product,i) => {
    return <Product
              onClick={props.onClick}
              key={i.toString()}
              style={ (props.keyo==0) ? props.style.style : props.style.styleB}
              boxStyle={Styles.box}
              image={product.ImageLink}
              URL={product.buyLink}
              Price={product.Price}
              ID={product.ID}/>
    })
  }
  </div>
)

export default TwoProducts;
