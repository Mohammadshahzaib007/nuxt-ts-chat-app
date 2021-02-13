
import Vue from 'vue';
import Vuex from 'vuex';
import { createDirectStore } from 'direct-vuex';
import user from './user';

Vue.use(Vuex);

const {
  store,
  moduleActionContext
} = createDirectStore({
  modules: {
    user
  }
});

export { store, moduleActionContext };

// The following lines enable types in the injected store '$store'.
export type AppStore = typeof store
declare module 'vuex' {
  interface Store<S> {
    direct: AppStore
  }
}
