import React from 'react';
import { useSelector } from 'react-redux';
import { selectSaleItems } from '../../data/selectors/saleItemSelector';
import { controlsSelector } from '../../data/selectors/controlsSelector';
import Controls from './Controls';
import SalesList from '../sale/SalesList';
function Homepage() {
  const { sortType, condition, maxPrice, bestOnly } = useSelector(controlsSelector);

  const wants = useSelector(state => selectSaleItems(state, sortType, condition, maxPrice, bestOnly));

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
      <SalesList />
    </div>
  );
}

Homepage.propTypes = {
  
};

export default Homepage;
