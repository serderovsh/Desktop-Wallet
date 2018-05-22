export const SET_TOKEN_BALANCES = 'SET_TOKEN_BALANCES';

export const setTokenBalances = (tokens = [], frozen = {}) => ({
  type: SET_TOKEN_BALANCES,
  tokens,
  frozen,
});

export const loadTokenBalances = (password) => async (dispatch) => {
  let { balances, frozen } = await Client.getAccountBalances(password);
  dispatch(setTokenBalances(balances, frozen));
};
