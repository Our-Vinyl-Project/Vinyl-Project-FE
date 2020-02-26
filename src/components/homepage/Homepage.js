import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectSaleItems } from '../../data/selectors/wantsSelector';
// import PropTypes from 'prop-types';
import Controls from './Controls';
import SalesList from '../sale/SalesList';
function Homepage() {
  const wants = useSelector(selectSaleItems);
  useEffect(() => {
    console.log(wants);
  }, [wants]);
  console.log(wants);
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
