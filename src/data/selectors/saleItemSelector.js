import conditionRatings from '../conditionRatings';

export const filterByCondition = (availableItems, condition) => {
  if(availableItems.length === 0) return [];
  return condition === 'Any' ?
    availableItems :
    availableItems.filter(saleItem => conditionRatings[saleItem.condition_media] >= +condition);
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
  return filteredByMaxPrice.slice().sort((a, b) => a[sortCriterion] - b[sortCriterion]);
};

export const selectSaleItems = ({ wants: { saleItems } }, sortCriterion, condition, maxPrice, bestOnly) => {
  if(saleItems.length === 0) return [];
  const availableItems = saleItems.filter(saleItem => saleItem.item_only_price);
  const unavailableItems = saleItems.filter(saleItem => !saleItem.item_only_price);
  const filteredByCondition = filterByCondition(availableItems, condition);
  const filteredByMaxPrice = filterByMaxPrice(filteredByCondition, maxPrice);
  const sorted = sortBy(filteredByMaxPrice, sortCriterion);
  return bestOnly ?
    sorted.sort((a, b) => a.release_id - b.release_id).reduce((acc, saleItem, i) => {
      if(i === 0)
        acc.push(saleItem); else
      if(saleItem.release_id  !== acc[acc.length - 1].release_id)
        acc.push(saleItem);
      return acc;
    }, []).concat(unavailableItems) :
    sorted.concat(unavailableItems);
};

export const selectSaleItem = (stateArray, saleItemId) =>
  stateArray.wants.saleItems.find(item => item.sale_id == saleItemId);
