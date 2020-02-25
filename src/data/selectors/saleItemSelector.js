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


export const selectSaleItem = (stateArray, saleItemId) => {

  const obj = stateArray.find(item => item.id = saleItemId);

  return obj;

};
// console.log(selectSaleItem(sade, '1066295371'));



