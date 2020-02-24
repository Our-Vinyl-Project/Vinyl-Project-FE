import React from 'react';
import SaleItem from '../sale/SaleItem';
import PropTypes from 'prop-types';

//saleItemElements = map over list of items on sale and create individual <li> <SaleItem /></li>

function SalesList(props) {
  return (
    <ul>
      {saleItemElements}
    </ul>
  );
}

SalesList.propTypes = {
  
};
export default SalesList;
