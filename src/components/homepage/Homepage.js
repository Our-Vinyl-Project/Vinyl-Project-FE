import React from 'react';
import { useSelector } from 'react-redux';
import { selectSaleItems } from '../../data/selectors/saleItemSelector';
import { controlsSelector } from '../../data/selectors/controlsSelector';
import Search from './Search';
import Controls from './Controls';
import SalesList from '../sale/SalesList';
import { isWantsLoading } from '../../data/selectors/wantsSelector';
import Loading from '../Loading';
import styles from './Homepage.css';
import img from '../../assets/placeholder-sm.jpg';
function Homepage() {
  const { sortType, condition, maxPrice, bestOnly } = useSelector(controlsSelector);

  const wants = useSelector(state => selectSaleItems(state, sortType, condition, maxPrice, bestOnly));
  const loading = useSelector(isWantsLoading);

  if(wants.length === 0){
    return (
      <div>
        <Search />
        {loading ? <Loading /> : null}
<<<<<<< HEAD
        <img className={styles.homepageplaceholder} src="src/assets/placeholder.jpg" />
=======
        <img className={styles.homepageplaceholder} src={img} />
>>>>>>> a262b9c475a0d7fa588ad962cbce747b634ae411
      </div>
    );
  }

  return (
    <div>
      <Search />
      <Controls />
      <SalesList />
    </div>
  );
}

Homepage.propTypes = {
  
};

export default Homepage;
