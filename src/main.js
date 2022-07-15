import Vue from "vue";
import App from "./App.vue";
import TreeTable from 'tree-table-vue'

Vue.config.productionTip = false;
Vue.use(TreeTable)

new Vue({
  render: (h) => h(App),
}).$mount("#app");
