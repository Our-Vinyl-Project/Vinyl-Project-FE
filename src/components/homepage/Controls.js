import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getWants } from '../../data/actions/wantActions';
import setControls from '../../data/actions/controlActions';

const Controls = () => {
  const [sortType, setSortType] = useState('');
  const [condition, setCondition] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bestOnly, setBestOnly] = useState(true);
  const [user, setUser] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => dispatch(getWants(user));

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setControls({ sortType, condition, maxPrice, bestOnly }));
  };

  const toggleBestOnly = () => setBestOnly(bestOnly => !bestOnly);

  useEffect(() => {
    dispatch(setControls({ sortType, condition, maxPrice, bestOnly }));
  }, [bestOnly]);

  return (
    <>
      <label>Username:</label>
      <input value={user} onChange={({ target }) => setUser(target.value)} type="text"></input>
      <button onClick={handleClick}>Find Deals</button>
      <br/><br/>

      <form onSubmit={handleSubmit}>

        <label>Best Only</label>
        <input type="checkbox" onClick={({ target }) => toggleBestOnly(target.checked)} checked={bestOnly} />

        <label>Sort by:</label>
        <select onChange={({ target }) => setSortType(target.value)} >
          <option value="deal">Best Deals</option>
          <option value="condition">Best Condition</option>
          <option value="price">Lowest Price</option>
          <option value="percent_diff">% Discount</option>
          <option value="amount_diff">$ Discount</option>
        </select>

        <label>Min. Condition:</label>
        <select onChange={({ target }) => setCondition(target.value)}>
          <option value="0">Any</option>
          <option value="2">Fair</option>
          <option value="3">Good</option>
          <option value="4">Good Plus</option>
          <option value="5">Very Good</option>
          <option value="6">Very Good Plus</option>
          <option value="7">Near Mint</option>
          <option value="8">Mint</option>
        </select>

        <label>Max. Price:</label>
        <input type="number" placeholder="$" onChange={({ target }) => setMaxPrice(target.value)}/>
        <button>Update</button>
      </form>      
    </>
  );
};

export default Controls;
