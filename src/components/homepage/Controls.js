import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import setControls from '../../data/actions/controlActions';
import styles from './Controls.css';

const Controls = () => {
  const [sortType, setSortType] = useState('percent_diff');
  const [condition, setCondition] = useState('0');
  const [maxPrice, setMaxPrice] = useState('');
  const [bestOnly, setBestOnly] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setControls({ sortType, condition, maxPrice, bestOnly }));
  };

  const toggleBestOnly = () =>
    setBestOnly(bestOnly => !bestOnly);

  useEffect(() => {
    dispatch(setControls({ sortType, condition, maxPrice, bestOnly }));
  }, [bestOnly]);

  return (
    <>
      <div className={styles.controls}>
        <form onSubmit={handleSubmit}>

          <label className={styles.bestdeals}>Best Only:</label>
          <input type="checkbox" onClick={toggleBestOnly} defaultChecked={bestOnly} />

          <label className={styles.sortby}>Sort by:</label>
          <select onChange={({ target }) => setSortType(target.value)} >
            <option value="percent_diff">% Discount</option>
            <option value="amount_diff">$ Discount</option>
            <option value="condition">Best Condition</option>
            <option value="price">Lowest Price</option>
          </select>

          <label className={styles.mincondition}>Min. Condition:</label>
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

          <label className={styles.maxprice}>Max. Price:</label>
          <input type="text" placeholder="$" onChange={({ target }) => setMaxPrice(target.value)}/>
          <button>UPDATE</button>
        </form>    
      </div>
    </>
  );
};

export default Controls;
