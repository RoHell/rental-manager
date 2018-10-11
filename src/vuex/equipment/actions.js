import constants from "./constants";

export const createItem = async ({ commit }, createdItem) => {
  commit(constants.CREATE_ITEM, createdItem);
};

export const addItem = async ({ commit }, addedItem) => {
  commit(constants.ADD_ITEM, addedItem);
};
