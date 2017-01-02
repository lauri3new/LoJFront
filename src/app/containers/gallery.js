import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";

class Gallery extends React.Component {
  // componentDidMount() {
  //   this.props.getInit('gallery/0');
  // }

  render() {
    return (
      <div>
        <div>
          { this.props.products.map((product, i) => {
            return (
              <div key={i}>
                {`${i} and ${product.Title}`}
              </div>
            );
          })}
        </div>
        <button onClick={() => {}}>
          click me
        </button>
      </div>
    );
  }
}

Gallery.propTypes = {
  products: React.PropTypes.array,
  // getInit: React.PropTypes.func
};

// mapStateToProps tells React which properties of global state do we want to
// use in this component (users, error obj) and to which local properties we want to map them,
// so that they are accessible in from this.props
const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts(id) {
      dispatch(getData(id));
    },
    getInit(p) {
      dispatch(getData(p));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
