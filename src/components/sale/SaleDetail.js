import React from 'react';
import PropTypes from 'prop-types';

const SaleDetail = ({ sampleEnhancedScrape }) => {
  const saleDetail = sampleEnhancedScrape.listing.map(sale => (
    <>
      <section>
        <h2>{sale.title}</h2>
        <img src={sampleEnhancedScrape.thumbnail} />
      </section>
      <section>
        <p>Condition: {sale.condition_media}</p>
        <p>Ships from: {sale.ships_from}</p>
        <p>Fair Market Price: ${sale.suggested_price}</p>
        <p>Price: {sale.price}</p>
        <p>{sale.percent_diff}%</p>
        <p>${sale.amount_diff}</p>
      </section>
    </>

  ));

  return (
    <>
      {saleDetail}
    </>
  );
};

SaleDetail.propTypes = {
  sampleEnhancedScrape: PropTypes.object
};

export default SaleDetail;
