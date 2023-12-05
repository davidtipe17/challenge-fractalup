import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="">
      <Link to="/">LOGO</Link>
      <Link to="/">Home</Link>
      <Link to="/vista1">Vista1</Link>
      <Link to="/vista2">Vista2</Link>
    </div>
  );
};

export default Sidebar;