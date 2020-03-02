import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectSaleItem } from '../../data/selectors/saleItemSelector';
import PricesOverTimeChart, { pricesOverTimeChart } from './charts/Chart';
import styles from './SaleDetail.css';

const SaleDetail = ({ match }) => {
  const sale = useSelector(state => selectSaleItem(state, match.params.id));

  const aboveOrBelow = (sale) => {
    if(sale.amount_diff > 0) {
      return (
        <>
          <p className={styles.SDpercent}>{sale.percent_diff}% above suggested price</p>
          <p className={styles.SDamount}>${sale.amount_diff} above suggested price</p>
        </>
      );
    } else {
      return (
        <>
          <p className={styles.SDpercent}>{sale.percent_diff}% below suggested price</p>
          <p className={styles.SDamount}>${sale.amount_diff} below suggested price</p>
        </>
      );
    }
  };

  return (
    <>
      <section className={styles.container}>
        <section className={styles.Sale}>
          <section className={styles.SaleMain}>
            <h2 className={styles.SDtitle}>{sale.title}</h2>
            <img className={styles.SDthumb} src={sale.thumbnail} />
          </section>
          <section className={styles.SaleDetails}>
            <p className={styles.SDcondition}>Condition (Media): {sale.condition_media}</p>
            <p className={styles.SDcondition}>Condition (Sleeve): {sale.condition_sleeve}</p>
            <p className={styles.SDcondition}>Ships from: {sale.ships_from}</p>
            <p className={styles.SDprice}>Fair Market Price: ${sale.suggested_price}</p>
            <p className={styles.SDprice}>Price: ${sale.item_only_price.toFixed(2)}</p>
            {aboveOrBelow(sale)}
            <br/>
            <a className={styles.discogsLink} href={`https:/www.discogs.com${sale.sale_link}`} target="_blank" rel="noopener noreferrer">Get This Deal!</a>
          </section>
        </section>
        <section className={styles.graph}>
          <PricesOverTimeChart />
        </section>
      </section>
    </>
  );};

SaleDetail.propTypes = {
  wants: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default SaleDetail;
