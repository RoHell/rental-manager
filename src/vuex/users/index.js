import * as actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import constants from "./constants";
import state from "./state";

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
  constants
};
