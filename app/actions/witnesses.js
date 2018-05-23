import { TronHttpClient } from 'tron-http-client';
// import { Client } from '@tronscan/client';

export const SET_WITNESSES = 'SET_WITNESSES';

export const setWitnesses = (witnesses = []) => ({
  type: SET_WITNESSES,
  witnesses,
});

// export const loadWitnesses = () => async (dispatch, getState) => {
//   dispatch(setWitnesses(await Client.getWitnesses()));
// };

export const loadWitnesses = () => async (dispatch, getState) => {
  let data = await TronHttpClient.listWitnesses();

  dispatch(setWitnesses(data));
};
