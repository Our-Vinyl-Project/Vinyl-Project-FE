import React from 'react';
import { useDispatch } from 'react-redux';
import { isWantsLoading, selectWants } from '../../data/selectors/wantsSelector';
import { getWants } from '../../data/actions/wantActions';
// import PropTypes from 'prop-types';

const Controls = () => {

  const dispatch = useDispatch();
  const loading = useSelector(isWantsLoading);
  const salesArray = useSelector(selectWants);
  const handleSubmit = () => {

  };

  return (
    <>
      <label>Username:</label>
      <input type="text"></input>
      <button onSubmit={handleSubmit}>Find Deals</button>
      <br/><br/>

      <label>Sort by:</label>
      <select>
        <option value="deal">Best Deals</option>
        <option value="condition">Best Condition</option>
        <option value="price">Lowest Price</option>
        <option value="percent_diff">% Discount</option>
        <option value="amount_diff">$ Discount</option>
      </select>

      <label>Min. Condition:</label>
      <select>
        <option value="fair">Any</option>
        <option value="fair">Fair</option>
        <option value="good">Good</option>
        <option value="good plus">Good Plus</option>
        <option value="very good">Very Good</option>
        <option value="very good plus">Very Good Plus</option>
        <option value="near mint">Near Mint</option>
        <option value="mint">Mint</option>
      </select>

      <label>Max. Price:</label>
      <select>
        <option value="fair">Any</option>
        <option value="5000">$5000</option>
        <option value="1000">$1000</option>
        <option value="500">$500</option>
        <option value="250">$250</option>
        <option value="100">$100</option>
        <option value="50">$50</option>
        <option value="25">$25</option>
        <option value="10">$10</option>
      </select>
    </>

  );

};

// Controls.propTypes = {};

export default Controls;
