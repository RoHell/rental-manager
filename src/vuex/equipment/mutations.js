import constants from "./constants";

export default {
  [constants.PREPARE_ITEM](state, preparedItem) {
    state.preparedItem = preparedItem;
  },
  [constants.ADD_PREPARED_ITEM](state, item) {
    state.items.push(item);
    state.isDataProvided = false;
  },
  [constants.SET_PROVIDED_DATA_STATE](state, dataState) {
    state.isDataProvided = dataState;
  },
  [constants.SET_SELECTED_ITEM](state, item = {}) {
    state.selectedItem = item;
  }
};
