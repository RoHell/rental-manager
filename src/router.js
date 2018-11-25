import Vue from "vue";
import Router from "vue-router";
import Login from "./components/Login.vue";

const RentedItems = () => import("./components/views/rentals/RentedItems.vue");
const RentedItemView = () =>
  import("./components/views/rentals/RentedItemView.vue");
const RentalCreate = () =>
  import("./components/views/rentals/RentalCreate.vue");
const Rentals = () => import("./components/views/rentals/Rentals.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/items",
      component: Rentals,
      children: [
        {
          path: "",
          name: "items",
          component: RentedItems
        },
        {
          path: "create",
          name: "create",
          component: RentalCreate
        },
        {
          path: "item/:id",
          name: "item",
          component: RentedItemView,
          props: true
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
