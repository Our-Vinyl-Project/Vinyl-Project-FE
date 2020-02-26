import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectSaleItem } from '../../data/selectors/saleItemSelector';

const SaleDetail = ({ match }) => {
  const sale = useSelector(state => state.wants.saleItems.find(item => item.id = match.params.id));
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
        <p>Price: ${sale.item_only_price}</p>
        <p>{sale.percent_diff}%</p>
        <p>${sale.amount_diff}</p>

        <button>Get This Deal!</button>
      </section>
    </>
  );};

SaleDetail.propTypes = {
  wants: PropTypes.array,
  // match: PropTypes.shape({
  //   params: PropTypes.object({
  //     id: PropTypes.string
  //   })
  // })
};

export default SaleDetail;
