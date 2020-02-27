import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWants } from '../../data/actions/wantActions';
import setControls from '../../data/actions/controlActions';
import styles from './Controls.css';

const Controls = () => {
  const [sortType, setSortType] = useState('');
  const [condition, setCondition] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [user, setUser] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getWants(user));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setControls({ sortType, condition, maxPrice }));
  };

  return (
    <>
      <label className={styles.username}>Username:</label>
      <input value={user} onChange={({ target }) => setUser(target.value)} type="text"></input>
      <button onClick={handleClick}>FIND DEALS</button>
      <br/><br/>

      <form onSubmit={handleSubmit}>

        <div className={styles.onoffswitch}>
          <input type="checkbox" name="onoffswitch" className={styles.onoffswitchcheckbox} id="myonoffswitch"/>
          <label className={styles.onoffswitchlabel} htmlFor="myonoffswitch">
            <span className={styles.onoffswitchinner}></span>
            <span className={styles.onoffswitchswitch}></span>
          </label>
        </div>

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
        <input type="number" placeholder="$" onChange={({ target }) => setMaxPrice(target.value)}/>
        <button>UPDATE</button>
      </form>      
    </>

  );

};

export default Controls;
