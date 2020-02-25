import React from 'react';
// import PropTypes from 'prop-types';
import Controls from './Controls';
import SalesList from '../sale/SalesList';
// import SaleDetail from '../sale/SaleDetail';
function Homepage() {
  return (
    <div>
      <Controls />
      <SalesList />
      {/* < SaleDetail /> */}
    </div>
  );
}

Homepage.propTypes = {
  
};

export default Homepage;
