import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SalesList = ({ salesList }) => {
  const saleItem = salesList.map(sale => (
    <li key={sale.id}>
      <Link to={`/${sale.id}`}>
        <img src="" />
        <h5>{sale.title}</h5>
        <p>{sale.condition}</p>
        <p>{sale.price}</p>
      </Link>
    </li>
  ));

  return (
    <ul>
      {saleItem}
    </ul>
  );
};

SalesList.propTypes = {
  salesList: PropTypes.array
};

export default SalesList;
