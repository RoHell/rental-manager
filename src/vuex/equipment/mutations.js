import constants from "./constants";

export default {
  [constants.PREPARE_ITEM](state, preparedItem) {
    state.preparedItem = preparedItem;
  },
  [constants.ADD_PREPARED_ITEM](state, item) {
    state.items.push(item);
    state.isDataProvided = false;
  }
};
