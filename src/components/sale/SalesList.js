import React from 'react';
import  { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectSaleItems } from '../../data/selectors/saleItemSelector';
import { controlsSelector } from '../../data/selectors/controlsSelector';
import { isWantsLoading } from '../../data/selectors/wantsSelector';
import Loading from '../Loading';
import styles from './SalesList.css';

const SalesList = () => {
  const { sortType, condition, maxPrice, bestOnly } = useSelector(controlsSelector);
  const wants = useSelector(state => selectSaleItems(state, sortType, condition, maxPrice, bestOnly));
  const loading = useSelector(isWantsLoading);
  
  if(loading) return <Loading />;

  const saleItem = wants.map((sale, i) =>
    sale.item_only_price ?
      (
        <li className={styles.SaleItem} key={i}>
          <Link to={`/detail/${sale.sale_id}`}>
            <img className={styles.SLthumb} src={sale.thumbnail} />
            <h3 className={styles.SLtitle}>{sale.title}</h3>
            <p className={styles.SLcondition}>Condition: {sale.condition_media}</p>
            <p className={styles.SLprice}>${sale.item_only_price}</p>
            <p className={styles.SLpercent}>{sale.percent_diff} % different from suggested price</p>
            <p className={styles.SLamount}>{sale.amount_diff} different from suggested price</p>
            <p className={styles.SLavailable}>Number available: {sale.num_available}</p>
          </Link>
        </li>
      ) :
      (
        <li className={styles.NoSaleItem} key={i}>
          <img className={styles.SLthumb} src={sale.thumbnail} />
          <h3 className={styles.SLtitle}>{sale.title}</h3>
          <p className={styles.SLavailable}>None Currently Available</p>
        </li>
      ));

  return (
    <>
      <ul className={styles.SalesList}>
        {saleItem}
      </ul>
    </>
  );
};

SalesList.propTypes = { wants: PropTypes.array };

export default SalesList;
