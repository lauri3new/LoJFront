import React from "react";
import Styles from "./product.css";

const Product = (props) => (
<div style={props.styl}>
  <div className={[props.boxStyle,props.style].join(' ')}>
    <div className={Styles.inner}>
      <div className={Styles.boximage} style={{backgroundImage: `url("${props.image}")`}}>
          <button onClick={() => {console.log('okokoko'); props.onClick(props.ID)}}>HELLO sire</button>
      </div>
    </div>
  </div>
</div>
);

export default Product;
