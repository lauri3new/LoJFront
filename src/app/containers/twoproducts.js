import React from "react";
import Product from "../components/product";
import Styles from "./twoproducts.css";

const TwoProducts = props => (
  <div className={Styles.twoProducts}>
    {props.products.map((product, i) => {
      return (
        <Product
          onClickProp={props.onClickProp}
          key={i}
          style={(props.order === 0) ? props.style.fadeIn : props.style.opacityZero}
          boxStyle={Styles.box}
          image={product.ImageLink}
          URL={product.buyLink}
          Price={product.Price}
          ID={product.ID}
        />
      );
    })}
  </div>
);

TwoProducts.propTypes = {
  products: React.PropTypes.array,
  style: React.PropTypes.object
};

export default TwoProducts;
