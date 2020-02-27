import React from 'react';
import  { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectSaleItems } from '../../data/selectors/saleItemSelector';
import { controlsSelector } from '../../data/selectors/controlsSelector';
import { isWantsLoading } from '../../data/selectors/wantsSelector';
import Loading from '../Loading';
// import styles from '../App.css';

const SalesList = () => {
  const { sortType, condition, maxPrice, bestOnly } = useSelector(controlsSelector);
  const wants = useSelector(state => selectSaleItems(state, sortType, condition, maxPrice, bestOnly));
  const loading = useSelector(isWantsLoading);
  
  if(loading) return <Loading />;

  const saleItem = wants.map((sale, i) =>
    sale.item_only_price ?
      (
        <li key={i}>
          <Link to={`/detail/${sale.sale_id}`}>
            <img src={sale.thumbnail} />
            <h3>{sale.title}</h3>
            <p>Condition: {sale.condition_media}</p>
            <p>${sale.item_only_price}</p>
          </Link>
        </li>
      ) :
      (
        <li key={i}>
          <img src={sale.thumbnail} />
          <h3>{sale.title}</h3>
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
