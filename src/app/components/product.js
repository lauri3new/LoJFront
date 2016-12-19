import React from "react";
import Styles from "./product.css";

const Product = (props) => (
<div style={props.leftRight}>
  <div className={[props.boxStyle,props.style].join(' ')}>
    <div className={Styles.inner}>
      <div className={Styles.boximage} style={{backgroundImage: `url("${props.image}")`}}>
          <button onClick={() => {props.onClick(props.ID)}}>Select Winner</button>
      </div>
    </div>
  </div>
</div>
);

export default Product;
