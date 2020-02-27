import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styles from './SalesList.css';

const SalesList = ({ wants }) => {
  const saleItem = wants.map((sale, i) => (
    <li key={i}>
      <Link to={`/detail/${sale.sale_id}`}>
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
