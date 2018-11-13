import constants from "./constants";
import { rentalsRef } from "../../firebase";

export const prepareItem = async ({ commit }, item) => {
  commit(constants.PREPARE_ITEM, item);
};

export const addPreparedItem = async ({ commit, getters }) => {
  console.log("getters.getPreparedItem", getters.getPreparedItem);
  rentalsRef.push(getters.getPreparedItem);
  commit(constants.ADD_PREPARED_ITEM, getters.getPreparedItem);
};
