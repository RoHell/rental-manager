import Vue from "vue";
import Vuex from "vuex";

import CoreModule from "./core/index";
import EquipmentModule from "./equipment/index";
import UsersModule from "./users/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    core: CoreModule,
    equipment: EquipmentModule,
    users: UsersModule
  }
});
