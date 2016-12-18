import React from "react";
import Styles from "./product.css";

const Product = (props) => (
  <div className={[props.boxStyle,props.style].join(' ')}>
    <div className={Styles.inner}>
      <div className={Styles.boximage} style={{backgroundImage: `url("${props.image}")`}}>
        <div className={Styles.shader}>
          <button onClick={props.onClick}>HELLO sire</button>
          <a href={props.URL} target='_blank'>
            <div >
            eheheh {props.style}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Product;
