import conditionRatings from '../conditionRatings';

export const filterByCondition = ({ wants: { saleItems } }, condition) => {
  if(saleItems.length === 0) return [];
  return condition === 'Any' ?
    saleItems :
    saleItems.filter(saleItem => conditionRatings[saleItem.condition_media] >= +condition);
};

export const filterByMaxPrice = (filteredByCondition, maxPrice) => {
  if(filteredByCondition.length === 0) return [];
  return maxPrice === '' ?
    filteredByCondition :
    filteredByCondition.filter(release => release.item_only_price <= maxPrice);
};

export const sortBy = (filteredByMaxPrice, sortCriterion) => {
  if(filteredByMaxPrice.length === 0) return [];
  if(sortCriterion === 'condition') sortCriterion = conditionRatings[sortCriterion];
  filteredByMaxPrice.slice().sort((a, b) => a[sortCriterion] - b[sortCriterion]);
};

export const selectSaleItems = (state, sortCriterion, condition, maxPrice, single) => {
  const filteredByCondition = filterByCondition(state, condition);
  const filteredByMaxPrice = filterByMaxPrice(filteredByCondition, maxPrice);
  const sorted = sortBy(filteredByMaxPrice, sortCriterion);
  return single ?
    sorted.reduce((acc, saleItem, i) => {
      if(i === 0) acc.push(saleItem);
      else if(saleItem.release_id  !== acc[acc.length - 1].release_id) acc.push(saleItem);
    }, []) :
    sorted;
};

export const selectSaleItem = (stateArray, saleItemId) =>
  stateArray.wants.saleItems.find(item => item.sale_id == saleItemId);
