import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div style={{ display: 'relative', marginTop: '100px', marginLeft: '5%' }} >
      <Link className={`btn btn-primary`} to={`/`}> home</Link>
      <Link className={`btn btn-primary`} to={`/game`}> play game</Link>
      <Link className={`btn btn-primary`} to={`/shop`}> shop</Link>
    </div>
  );
};

export default Navbar;
