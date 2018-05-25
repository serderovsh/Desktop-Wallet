import xhr from 'axios';

export const SET_PRICE = 'SET_PRICE';
export const SEARCH = 'SEARCH';

export const search = (searchString) => ({
  type: SEARCH,
  searchString,
});

export const setPrice = (price, percentage) => ({
  type: SET_PRICE,
  price: parseFloat(price),
  percentage: parseFloat(percentage),
});

export const loadPrice = () => async (dispatch) => {
  let { data } = await xhr.get(`https://api.coinmarketcap.com/v1/ticker/tronix/`);
  dispatch(setPrice(data[0].price_usd, data[0].percent_change_24h));
};
