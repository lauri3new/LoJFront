import React from "react";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TwoProducts from "./twoproducts";
import Styles from "./game.css";
import { getData, selectWinner } from "../actions/actions";


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: Styles.enterActive,
      styleB: Styles.opacityZero
    };
  }

  componentDidMount() {
    this.props.getInit();
  }

  handleClick() {
    this.setState({
      style: Styles.enterActive
    });
  }

  render() {
    return (
      <div className={Styles.game}>
        <ReactCSSTransitionGroup
          transitionName={Styles}
          transitionEnter={false}
          transitionLeaveTimeout={1000}
        >
          { this.props.products.map((twoProducts, i) => {
            return (
              <TwoProducts
                classNom={Styles.game}
                key={twoProducts[0] && twoProducts[0].ID ? twoProducts[0].ID : i}
                keyo={i}
                products={twoProducts}
                stylee={Styles}
                style={this.state}
                onClick={(id) => {
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

// mapStateToProps tells React which properties of global state do we want to
// use in this component (users, error obj) and to which local properties we want to map them,
// so that they are accessible in from this.props
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
