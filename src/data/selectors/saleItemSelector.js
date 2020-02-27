import conditionRatings from '../conditionRatings';

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
    filteredByMaxPrice :
    filteredByMaxPrice.slice().sort((a, b) => a[sortCriterion] - b[sortCriterion]);

export const selectSaleItems = (state, sortCriterion, condition, maxPrice) => {
  const filteredByCondition = filterByCondition(state, condition);
  const filteredByMaxPrice = filterByMaxPrice(filteredByCondition, maxPrice);
  return sortBy(filteredByMaxPrice, sortCriterion);
};

export const selectSaleItem = (stateArray, saleItemId) =>
  stateArray.wants.saleItems.find(item => item.sale_id == saleItemId);
