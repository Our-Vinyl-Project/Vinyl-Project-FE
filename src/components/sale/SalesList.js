import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SalesList = ({ wants }) => {
  const saleItem = wants.map(sale => (
    <li key={sale.sale_id}>
      <Link to={`/${sale.sale_link}`}>
        <img src={sale.thumbnail} />
        <h3>{sale.title}</h3>
        <p>Condition: {sale.condition_media}</p>
        <p>${sale.item_only_price}</p>
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

SalesList.propTypes = { wants: PropTypes.array };

export default SalesList;
