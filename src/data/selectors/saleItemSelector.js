import conditionRatings from '../conditionRatings';

// pass in state
export const filterByCondition = ({ wants: { saleItems } }, condition) =>
  condition === 'Any' ?
    saleItems :
    saleItems.filter(saleItem => conditionRatings[saleItem.condition_media] >= +condition);
export const filterByMaxPrice = (filteredByCondition, maxPrice) =>
  maxPrice === '' ?
    filteredByCondition :
    filteredByCondition.filter(release => release.item_only_price <= maxPrice);
export const sortBy = (filteredByMaxPrice, sortCriterion) =>
  sortCriterion === 'deal' ?
    filteredByMaxPrice : // THIS IS WHERE WE ACTUALLY NEED TO RUN THE DEAL FINDING ALGO
    filteredByMaxPrice.slice().sort((a, b) => a[sortCriterion] - b[sortCriterion]);
export const selectSaleItems = (state, sortCriterion, condition, maxPrice) => {
  const filteredByCondition = filterByCondition(state, condition);
  const filteredByMaxPrice = filterByMaxPrice(filteredByCondition, maxPrice);
  return sortBy(filteredByMaxPrice, sortCriterion);

};



export const selectSaleItem = (stateArray, saleItemId) =>
  stateArray.wants.saleItems.find(item => item.sale_id == saleItemId);
// console.log(selectSaleItem(sade, '1066295371'));

// export const selectSalesByCondition = (array, condition) => {
  
//   let conditionArray = array.map(sale => {
//     if(sale.condition_media === condition) {
//       return sale;
//     }
//   });
//   return conditionArray;
// };
// console.log(selectSalesByCondition(sade, 'Near Mint (NM or M-)'));

// const selectSalesbyReleaseId = (array, id) => {

//   let releaseArray = array.map(item => {
//     if(item.id === id) {
//       return item;
//     }
//   });
//   return releaseArray;
// };

// console.log(selectSalesbyReleaseId(sade, '/Sade-The-Best-Of-Sade/release/8131475'));

// const selectSalesbyCountry = (array, country) => {
//   let countryArray = array.map(item => {
//     if(item.ships_from === country) {
//       return item;
//     }
//   });
//   return countryArray;
// };
