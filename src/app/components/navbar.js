import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div style={{ display: 'relative', marginLeft: '5%' }} >
      <Link className={`btn btn-default`} to={`/`}> home</Link>
      <Link className={`btn btn-default`} to={`/game`}> play game</Link>
      <Link className={`btn btn-default`} to={`/shop`}> shop</Link>
      <Link className={`btn btn-default`} to={`/league-table`}> league table</Link>
    </div>
  );
};

export default Navbar;
