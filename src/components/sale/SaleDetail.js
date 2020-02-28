import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectSaleItem } from '../../data/selectors/saleItemSelector';
import { Chart } from './charts/Chart';

const SaleDetail = ({ match }) => {
  const sale = useSelector(state => selectSaleItem(state, match.params.id));

  const aboveOrBelow = (sale) => {
    if(sale.amount_diff > 0) {
      return (
        <>
          <p>({sale.percent_diff}% above)</p>
          <p>(${sale.amount_diff} above)</p>
        </>
      );
    } else {
      return (
        <>
          <p>({sale.percent_diff}% below)</p>
          <p>(${sale.amount_diff} below)</p>
        </>
      );
    }
  };

  return (
    <>
      <section>
        <h2>{sale.title}</h2>
        <img src={sale.thumbnail} />
      </section>
      <section>
        <p>Condition (Media): {sale.condition_media}</p>
        <p>Condition (Sleeve): {sale.condition_sleeve}</p>
        <p>Ships from: {sale.ships_from}</p>
        <p>Fair Market Price: ${sale.suggested_price}</p>
        <p>Price: ${sale.item_only_price}</p>
        {aboveOrBelow(sale)}
        <br/>
        <button><a href={`https:/www.discogs.com${sale.sale_link}`}>Get This Deal!</a></button>
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
