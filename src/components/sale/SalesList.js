import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getWants from '../../data/actions/wantActions';

const SalesList = ({ sampleEnhancedScrape }) => {
  const saleItem = sampleEnhancedScrape.map(sale => (
    <li key={sale.id}>
      <Link to={`/${sale.id}`}>
        <img src={sale.thumbnail} />
        <h5>{sale.title}</h5>
        <p>{sale.condition_media}</p>
        <p>{sale.item_only_price}</p>
      </Link>
    </li>
  ));

  return (
    <>
      <ul>
        {saleItem}
      </ul>
    </>
  );
};

SalesList.propTypes = {
  sampleEnhancedScrape: PropTypes.object
};

export default SalesList;
