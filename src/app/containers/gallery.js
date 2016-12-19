import React from "react";
import TwoProducts from "./TwoProducts.js"
import Styles from "./gallery.css";
import { connect } from "react-redux";
import { getData, selectWinner } from "../actions/actions.js";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style : Styles.enterActive,
      styleB : Styles.opacityZero
    }
  };
  handleClick() {
    this.setState({
      style : Styles.enterActive
    })
  }
  componentDidMount() {
      this.props.getInit()
    };

render() {
  return (
  <div>
    <div className={Styles.gallery}>
      <ReactCSSTransitionGroup
        transitionName={Styles}
        transitionEnter={false}
        transitionLeaveTimeout={500}>
      {this.props.products.map((twoProducts,i) => {
        return <TwoProducts
                  key={twoProducts[0].ID}
                  keyo={i}
                  products={twoProducts}
                  stylee={Styles}
                  style={this.state}
                  boxStyle={Styles.box}
                  onClick={(id) => this.props.selectWinner(id)}
                />})}
      </ReactCSSTransitionGroup>
    </div>
      <button onClick={() => {
      this.props.getProducts();
      this.handleClick();
      }}>
        click me
      </button>
  </div>
)};
}

// mapStateToProps tells React which properties of global state do we want to
// use in this component (users, error obj) and to which local properties we want to map them,
// so that they are accessible in from this.props
const mapStateToProps = (state) => ({
    products: state.products
});

const mapDispatchToProps = (dispatch) => {
  return {
      getProducts() {
      dispatch(getData())
      },
      getInit(p) {
      dispatch(getData(p))
      },
      selectWinner(id) {
      dispatch(selectWinner(id))
      }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Gallery);
