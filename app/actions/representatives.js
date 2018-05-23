export const SET_REPRESENTATIVES = "SET_REPRESENTATIVES";

export const setRepresentatives = (representatives = []) => ({
  type: SET_REPRESENTATIVES,
  representatives,
});

export const loadRepresentatives = () => async (dispatch, getState) => {
  dispatch(setRepresentatives(await Client.getRepresentatives()));
};
