import React from "react";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TwoProducts from "./twoproducts";
import Styles from "./game.css";
import { getData, selectWinner } from "../actions/actions";

// Game container - game involves choosing preferred product, next product is loaded behind
// for smooth transition, fades in from opacity 0.
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: Styles.enterInit,
      opacityZero: Styles.opacityZero
    };
  }

  componentDidMount() {
    if (this.props.products.length === 0) {
      this.props.getInit();
    }
  }

  componentWillReceiveProps() {
    this.setState({
      fadeIn: Styles.enterActive,
      opacityZero: Styles.opacityZero
    });
  }

  render() {
    return (
// react css transition group animates twoProducts fade out when they leave DOM
      <div className={Styles.game}>
        <ReactCSSTransitionGroup
          transitionName={Styles}
          transitionEnter={false}
          transitionLeaveTimeout={1000}
        >
          { this.props.products.map((twoProducts, i) => {
// key is product ID or i as index when no products loaded.. index is not recommended to use as key
            return (
              <TwoProducts
                key={twoProducts[0] && twoProducts[0].ID ? twoProducts[0].ID : i}
                order={i}
                products={twoProducts}
                styleProp={Styles}
                style={this.state}
                onClickProp={(id) => {
                  this.props.selectWinner(id);
                  this.props.getProducts();
                }}
              />);
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Game.propTypes = {
  selectWinner: React.PropTypes.func,
  getProducts: React.PropTypes.func,
  getInit: React.PropTypes.func,
  products: React.PropTypes.array
};

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts() {
      dispatch(getData());
    },
    getInit(p) {
      dispatch(getData(p));
    },
    selectWinner(id) {
      dispatch(selectWinner(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
