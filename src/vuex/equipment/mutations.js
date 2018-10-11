import constants from "./constants";

export default {
  [constants.ADD_ITEM](state, createdItem) {
    state.createdItem = createdItem;
  }
};
