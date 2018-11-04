import constants from "./constants";

export const prepareItem = async ({ commit }, item) => {
  commit(constants.PREPARE_ITEM, item);
};

export const addPreparedItem = async ({ commit, getters }) => {
  commit(constants.ADD_PREPARED_ITEM, getters.getPreparedItem);
};
