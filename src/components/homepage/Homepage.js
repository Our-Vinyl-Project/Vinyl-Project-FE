import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectSaleItems } from '../../data/selectors/saleItemSelector';
import { controlsSelector } from '../../data/selectors/controlsSelector';
// import PropTypes from 'prop-types';
import Controls from './Controls';
import SalesList from '../sale/SalesList';
function Homepage() {
  const { sortType, condition, maxPrice } = useSelector(controlsSelector);

  const wants = useSelector(state => selectSaleItems(state, sortType, condition, maxPrice));
  console.log(wants, 'hiiiiii');
  // useEffect(() => {
  // }, [wants]);

  if(!wants){
    return (
      <div>
        <Controls />
      </div>
    );
  }

  return (
    <div>
      <Controls />
      <SalesList wants={wants} />
    </div>
  );
}

Homepage.propTypes = {
  
};

export default Homepage;
