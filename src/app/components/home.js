import React from "react";
import Styles from "./home.css";
import { Link } from 'react-router';
import Share from './share';

// App container acts as presentation frame for app.
const Home = (props) => {
  return (
  <div className={Styles.body}>
    <div className={Styles.shaded} >
      <div className="row" style={{ height: '10vh'}}></div>
      <div className="row">
        <div className="col-sm-12" style={{ textAlign: 'center'}} >
          <div className={Styles.title}> League Of Jerseys </div>
        </div>
      </div>
    <div className="row" style={{ height: '20vh'}}></div>
    <div className="row">
      <div className="col-sm-12" style={{ textAlign: 'center'}} >
              <Link className={Styles.play} to={`/play`}>Play Game</Link>
      </div>
    </div>
    <div className="row" style={{ height: '20vh'}}></div>
    <div className="row" >
<div className="col-sm-2 col-sm-offset-5" style={{ textAlign: 'center'}} >
              <Share />
</div>
</div>
    </div>
  </div>
  );
};

export default Home;
