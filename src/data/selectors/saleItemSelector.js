// const sade = [
//   {
//     'title': 'Sade - The Best Of Sade (2xLP, Comp, RE, Gat)',
//     'condition_sleeve': 'Near Mint (NM or M-)',
//     'condition_media': 'Near Mint (NM or M-)',
//     'seller': 'strat-mangler',
//     'ships_from': 'Canada',
//     'price': '$20.00',
//     'shipping': '\n        + shipping',
//     'converted_price': '',
//     'release_link': '/Sade-The-Best-Of-Sade/release/8131475',
//     'id': 1061677317,
//     'item_only_price': null,
//     'suggested_price': 25.4575,
//     'amount_diff': null,
//     'percent_diff': null
//   },
//   {
//     'title': 'Sade - The Best Of Sade (2xLP, Comp, RE, Gat)',
//     'condition_sleeve': 'Mint (M)',
//     'condition_media': 'Mint (M)',
//     'seller': 'KopsRecords',
//     'ships_from': 'Canada',
//     'price': 'CA$27.99',
//     'shipping': '\n        + shipping',
//     'converted_price': 'about $21.05',
//     'release_link': '/Sade-The-Best-Of-Sade/release/8131475',
//     'id': 1066295371,
//     'item_only_price': 21.05,
//     'suggested_price': 28.452499999999997,
//     'amount_diff': -7.402499999999996,
//     'percent_diff': -0.2601704595378261
//   }
// ];

{/* <label>Sort by:</label>
<select>
  <option value="deal">Best Deals</option>
  <option value="condition">Best Condition</option>
  <option value="price">Lowest Price</option>
  <option value="percent_diff">% Discount</option>
  <option value="amount_diff">$ Discount</option>
</select>

<label>Min. Condition:</label>
<select>
  <option value="All">All </option>
  <option value="F">Fair</option>
  <option value="G">Good</option>
  <option value="GP">Good Plus</option>
  <option value="VG">Very Good</option>
  <option value="VGP">Very Good Plus</option>
  <option value="NM">Near Mint</option>
  <option value="M">Mint</option>
</select>

<label>Max. Price:</label>
<select>
  <option value="fair">Any</option>
  <option value="5000">$5000</option>
  <option value="1000">$1000</option>
  <option value="500">$500</option>
  <option value="250">$250</option>
  <option value="100">$100</option>
  <option value="50">$50</option>
  <option value="25">$25</option>
  <option value="10">$10</option>
</select> */}

// 'Mint (M)': 8,
// 'Near Mint (NM or M-)': 7,
// 'Very Good Plus (VG+)': 6,
// 'Very Good (VG)': 5,
// 'Good Plus (G+)': 4,
// 'Good (G)': 3,
// 'Fair (F)': 2,
// 'Poor (P)': 1

const getSalesItemsFilter1 = (state, condition) => {
  return state.wants.filter(want => want.media_condition === condition)
};

const getSalesItemsFilter2 = (filtered1, maxPrice) => {
  return filtered1.filter(release => release.item_only_price < maxPrice);
};

const getSorted = (filtered2, sortBy) => {
  return filtered2.sort((a, b) => a.sortBy - b.sortBy);
};

export const selectSaleItems = (state, sortBy, condition, maxPrice) => {
  if(sortBy === 'deal') // run the algorithm and return the result

  const filtered1 = getSalesItemsFilter1(state, condition);
  const filtered2 = getSalesItemsFilter2(filtered1, maxPrice)
  return getSorted(filtered2, sortBy);
}

export const selectSaleItem = (stateArray, saleItemId) => {

  const obj = stateArray.find(item => item.id = saleItemId);

  return obj;

};
// console.log(selectSaleItem(sade, '1066295371'));


export const selectSalesByCondition = (array, condition) => {
  
  let conditionArray = array.map(sale => {
    if(sale.condition_media === condition) {
      return sale;
    }
  });
  return conditionArray;
};
// console.log(selectSalesByCondition(sade, 'Near Mint (NM or M-)'));

const selectSalesbyReleaseId = (array, id) => {

  let releaseArray = array.map(item => {
    if(item.id === id) {
      return item;
    }
  });
  return releaseArray;
};

// console.log(selectSalesbyReleaseId(sade, '/Sade-The-Best-Of-Sade/release/8131475'));

const selectSalesbyCountry = (array, country) => {
  let countryArray = array.map(item => {
    if(item.ships_from === country) {
      return item;
    }
  });
  return countryArray;
};
