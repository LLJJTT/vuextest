import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
	count:1,
	token:''
}
const mutations = {
  add(state){
      state.count+=1;
  },
  reduce(state){
      state.count-=1;
  }
}
// 外部引用
export default new Vuex.Store({
  state,
  mutations
});