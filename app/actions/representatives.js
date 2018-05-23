import { TronHttpClient } from 'tron-http-client';

export const SET_REPRESENTATIVES = "SET_REPRESENTATIVES";

export const setRepresentatives = (representatives = []) => ({
  type: SET_REPRESENTATIVES,
  representatives,
});

export const loadRepresentatives = () => async (dispatch, getState) => {
  let data = await TronHttpClient.listWitnesses();

  dispatch(setRepresentatives(data));
};
