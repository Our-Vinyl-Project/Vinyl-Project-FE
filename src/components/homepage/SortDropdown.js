import React from 'react';
import PropTypes from 'prop-types';

const SortDropdown = () => (

  );

return (
  <>
  <label>Sort by:</label>
    <select>
      <option value="condition">Best Condition</option>
      <option value="price">Lowest Price</option>
      <option value="percent_diff">% Discount</option>
      <option value="amount_diff">$ Discount</option>
    </select>

    <label>Maximum Price:</label>
    <select>
      <option value="5000">$5000</option>
      <option value="1000">$1000</option>
      <option value="500">$500</option>
      <option value="250">$250</option>
      <option value="100">$100</option>
      <option value="50">$50</option>
      <option value="25">$25</option>
      <option value="10">$10</option>
    </select>

    <label>Minimum Condition:</label>
    <select>
      <option value="condition">condition</option>
      <option value="condition">condition</option>
      <option value="condition">condition</option>
      <option value="condition">condition</option>
      <option value="condition">condition</option>
      <option value="condition">condition</option>
      <option value="condition">condition</option>
    </select>
  </>

);

SortDropdown.propTypes = {};

export default SortDropdown;