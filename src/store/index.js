import Vue from 'vue';
import Vuex from 'vuex';
import State from './state';
import Mutations from './mutations';
import Actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: State,
  mutations: Mutations,
  actions: Actions,
  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
});
