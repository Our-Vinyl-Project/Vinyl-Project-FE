import React from 'react';
import PropTypes from 'prop-types';
import SaleList from '../sale/SalesList';
import SortDropdown from './SortDropdown';
import Wantlist from '../Wantlist';


//wantlist wont stay...just for skatebaord
function Homepage() {
  return (
    <div>
      <Wantlist />
      {/* <SortDropdown /> */}
      {/* <SaleList /> */}
    </div>
  );
}

Homepage.propTypes = {
  
};

export default Homepage;
