import React from 'react';
import SearchWrap from './SearchWrap';
import MenuWrap from './MenuWrap';
import ContentWrap from './ContentWrap';

const Dashboard = () => {
  return (
    <div className="dashboard grid grid-cols-12 grid-rows-12 h-screen">
      <SearchWrap />
      <MenuWrap />
      <ContentWrap />
    </div>
  );
};

export default Dashboard;