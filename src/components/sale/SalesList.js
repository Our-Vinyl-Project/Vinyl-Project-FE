import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// TO DO: add img src; check that id is the right way to direct to detail page; see if we need more info on the saleItems to show "deals" 

const SalesList = ({ sampleEnhancedScrape }) => {
  const saleItem = sampleEnhancedScrape.listing.map(sale => (
    <li key={sale.id}>
      <Link to={`/${sale.id}`}>
        <img src={sampleEnhancedScrape.thumbnail} />
        <h5>{sale.title}</h5>
        <p>{sale.condition_media}</p>
        <p>{sale.price}</p>
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
