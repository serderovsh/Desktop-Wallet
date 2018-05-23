export const SET_TOKENS = 'SET_TOKENS';

export const setTokens = (tokens = []) => ({
  type: SET_TOKENS,
  tokens,
});

export const loadTokens = () => async (dispatch, getState) => {
  let assets = await Client.getAssetIssueList();
  dispatch(setTokens(assets));
};
