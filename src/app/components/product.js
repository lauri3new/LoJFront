import React from "react";
import Styles from "./product.css";

class Product extends React.Component {
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
      clicked: true,
      style: `${Styles.noClicks}`
    });
    this.state.noClick = setTimeout(() => {
      this.setState({
        clicked: false
      }); }, 1000);
  }

  render() {
    return (
      <div
        className={`${this.props.boxStyle} ${this.props.clicked === true ? Styles.noPointer : null}`}
        style={{ backgroundImage: `url("${this.props.image}")` }}
        onClick={() => {
          this.handleClick();
          this.props.handleClick();
          this.props.onClickProp(this.props.ID);
        }}
      >
        <div className={Styles.shading} >
          <a href={this.props.buyLink} target="_blank" >
            <button className={Styles.buy}> PURCHASE </button>
          </a>
        </div>
        {this.state.clicked === true ? <span className={`glyphicon glyphicon-heart + ${Styles.heart}`} /> : null}
      </div>
    );
  }
}

Product.propTypes = {
  boxStyle: React.PropTypes.string,
  onClickProp: React.PropTypes.func,
  handleClick: React.PropTypes.func,
  ID: React.PropTypes.number,
  clicked: React.PropTypes.bool,
  image: React.PropTypes.string,
  buyLink: React.PropTypes.string
};

export default Product;
