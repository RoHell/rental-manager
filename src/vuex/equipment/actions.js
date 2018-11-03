import constants from "./constants";

export const prepareItem = async ({ commit }, item) => {
  commit(constants.PREPARE_ITEM, item);
};

export const addPreparedItem = async ({ commit, getters }) => {
  commit(constants.ADD_PREPARED_ITEM, getters.getPreparedItem);
};

export const setSelectedItem = async ({ commit, getters }, itemId) => {
  const selectedItem = getters.getItems.find(item => item.id === itemId);
  commit(constants.SET_SELECTED_ITEM, selectedItem);
};
