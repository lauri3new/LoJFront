import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";
import Styles from "./league.css";

class League extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getTable();
    const autoUpdate = setInterval(() => {
      this.props.getTable(); }, 5000);
    this.setState({
      autoUpdate
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.autoUpdate);
  }

  render() {
    const wentUp = <span className={`glyphicon glyphicon-triangle-top ${Styles.increase}`} />;
    const wentDown = <span className={`glyphicon glyphicon-triangle-bottom ${Styles.decrease}`} />;
    return (
      <table
        className={"table table-striped table-bordered table-hover " + Styles.table + ' ' + Styles.enterInit}
      >
        <tbody>
          <tr>
            <th>Position</th>
            <th>Points</th>
            <th>Shirt</th>
            <th>More info bro</th>
          </tr>
          {this.props.Present.map((shirt, i) => {
            return (
              <tr key={i}>
                <td>
                  {i + 1 + ' '}
                  {i < this.props.PastOrder.indexOf(shirt.ID) || this.props.PastOrder.indexOf(shirt.ID) === -1 ? wentUp : null}
                  {i > this.props.PastOrder.indexOf(shirt.ID) && this.props.PastOrder.indexOf(shirt.ID) !== -1 ? wentDown : null}
                </td>
                <td>
                  {`${shirt.Points}`}
                </td>
                <td>
                  {`${shirt.Title}`}
                </td>
                <td>
                  <a href={`${shirt.OurAffLink}`}>
                    {`${shirt.Price}`}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

League.propTypes = {
  Present: React.PropTypes.array,
  PastOrder: React.PropTypes.array,
  getTable: React.PropTypes.func
};

// mapStateToProps tells React which properties of global state do we want to
// use in this component (users, error obj) and to which local properties we want to map them,
// so that they are accessible in from this.props
const mapStateToProps = state => ({
  Present: state.league.Present,
  Past: state.league.Past,
  PastOrder: state.league.PastOrder
});

const mapDispatchToProps = (dispatch) => {
  return {
    getTable() {
      dispatch(getData(`league`, `LEAGUE`));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(League);
