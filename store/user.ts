import { defineModule } from 'direct-vuex';
import { moduleActionContext } from '../store';

const user = defineModule({
  state: () => ({
    user: {
      loggedIn: false,
      data: null
    }

  }),
  getters: {
    user (state) {
      return state.user;
    }
  },
  mutations: {
    SET_LOGGED_IN (state, value) {
      state.user.loggedIn = value;
    },
    SET_USER (state, data) {
      state.user.data = data;
    }
  },
  actions: {
    fetchUser (context, user) {
      const { commit } = mod1ActionContext(context);
      context.commit('SET_LOGGED_IN', user !== null);
      if (user) {
        context.commit('SET_USER', {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        context.commit('SET_USER', null);
      }
    }
  }
});

export default user;
const mod1ActionContext = (context: any) => moduleActionContext(context, user)
;
