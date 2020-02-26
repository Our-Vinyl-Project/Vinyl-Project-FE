import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectSaleItem } from '../../data/selectors/saleItemSelector';

const SaleDetail = ({ match }) => {
  const sale = useSelector(state => selectSaleItem(state, match.params.id));
  console.log(sale);
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
        <span>Price: ${sale.item_only_price}</span>
        <span>({sale.percent_diff}%)</span>
        <span>(${sale.amount_diff})</span>
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
