import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-logo">LOGO</Link>
      <Link to="/" className="sidebar-link">Home</Link>
      <Link to="/vista1" className="sidebar-link">Vista1</Link>
      <Link to="/vista2" className="sidebar-link">Vista2</Link>
    </div>
  );
};

export default Sidebar;