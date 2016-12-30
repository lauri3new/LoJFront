import React from "react";
import Styles from "./product.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick() {
    this.setState({
      clicked: true,
      style: `${Styles.noClicks}`
    });
    setTimeout(() => {
      this.setState({
        clicked: false
      }); }, 1000);
  }

  render() {
    return (
      <div className={this.props.boxStyle} >
        <div className={this.props.style} >
          <div className={Styles.btntainer} >
            <button
              className={`btn btn-default ${Styles.fifty} ${this.state.style}`}
              onClick={() => {
                this.handleClick();
                this.props.onClick(this.props.ID);
              }}
            >
              Winner
            </button>
            <button className={`btn btn-default ${Styles.fifty}`}> more info </button>
          </div>
          <div
            className={Styles.boximage}
            style={{ backgroundImage: `url("${this.props.image}")` }}
          >
            {this.state.clicked === true ? <span className={`glyphicon glyphicon-heart + ${Styles.heart}`} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  boxStyle: React.PropTypes.string,
  style: React.PropTypes.string,
  onClick: React.PropTypes.func,
  ID: React.PropTypes.number,
  image: React.PropTypes.string
};

export default Product;
