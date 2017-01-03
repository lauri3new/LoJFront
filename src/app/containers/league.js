import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";
import Styles  from "./league.css";

class League extends React.Component {
  componentDidMount() {
    this.props.getData(`league`, `LEAGUE`);
  }

  render() {
    return (
      <div
        className={Styles.table + ' ' + Styles.enterInit}
      >
       <table
         className="table table-striped table-bordered table-hover"
       >
         <tbody>
         <tr>
          <th>Position</th>
          <th>Points</th>
          <th>Shirt</th>
          <th>More info bro</th>
         </tr>
        { this.props.league.map((shirt, i) => {
          return (
            <tr key={i}>
            <td>
              {`${i}`}
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
      </div>
    );
  }
}

League.propTypes = {
  league: React.PropTypes.array,
  getData: React.PropTypes.func
};

// mapStateToProps tells React which properties of global state do we want to
// use in this component (users, error obj) and to which local properties we want to map them,
// so that they are accessible in from this.props
const mapStateToProps = state => ({
  league: state.league
});

const mapDispatchToProps = (dispatch) => {
  return {
    getData(path, type) {
      dispatch(getData(path, type));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(League);
