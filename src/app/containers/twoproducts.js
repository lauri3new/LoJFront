import React from "react";
import Product from "../components/product";
import Styles from "./twoproducts.css";

class TwoProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  componentWillUnmount() {
    clearTimeout(this.state.noClick);
  }

  handleClick() {
    this.setState({
      clicked: true
    });
    this.state.noClick = setTimeout(() => {
      this.setState({
        clicked: false
      }); }, 1000);
  }

  scrollDown() {
    // TODO: implement scrollDown
  }

  render() {
    return (
      <div className={Styles.twoProducts} ref="ok">
        <div className={Styles.versus}> V s </div>
        {this.props.products.map((product, i) => {
          return (
            <Product
              handleClick={() => { this.handleClick(); }}
              onClickProp={this.props.onClickProp}
              clicked={this.state.clicked}
              noPointer={Styles.noPointer}
              key={i}
              boxStyle={this.props.order === 2 ? Styles.boxIn : Styles.box}
              image={product.ImageLink}
              buyLink={product.buyLink}
              Price={product.Price}
              ID={product.ID}
            />
          );
        })}
      </div>
    );
  }
}

TwoProducts.propTypes = {
  products: React.PropTypes.array,
  order: React.PropTypes.number,
  onClickProp: React.PropTypes.func
};

export default TwoProducts;
