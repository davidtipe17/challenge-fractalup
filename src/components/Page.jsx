import React from 'react';
import Sidebar from './SideBar';

import './Page.css'; 

const Page = ({ children }) => {
  return (
    <div className="container">
        <Sidebar />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Page;
