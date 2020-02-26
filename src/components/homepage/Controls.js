import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWants } from '../../data/actions/wantActions';

const Controls = () => {

  const [user, setUser] = useState('');
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getWants(user));
  };

  return (
    <>
      <label>Username:</label>
      <input value={user} onChange={({ target }) => setUser(target.value)} type="text"></input>
      <button onClick={handleClick}>Find Deals</button>
      <br/><br/>

      <form>
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
        <input type="number" placeholder="$"/>
        <button>Update</button>
      </form>      

    </>

  );

};

export default Controls;
