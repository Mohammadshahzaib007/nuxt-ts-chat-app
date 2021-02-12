import { defineModule } from 'direct-vuex';
import { moduleActionContext } from '../store';
import { UserState } from './types/user';
import firebaseApp from '~/firebase';

const user = defineModule({
  state: (): UserState => ({
    user: {
      isloggedIn: false,
      data: null,
      ActiveUserUid: '',
      displayName: ''
    }

  }),
  getters: {
    user (state) {
      return state.user;
    },
    displayName (state) {
      return state.user.displayName;
    }
  },
  mutations: {
    ON_LOG_IN (state, payload: {email: string, password: string}) {
      // console.log(payload);
      firebaseApp.auth().signInWithEmailAndPassword(payload.email, payload.email)
        .then((data) => {
          console.log(data);
          state.user.userUid = data?.user?.uid;
          // $nuxt.$router.push('/')
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ON_SIGN_UP (state, payload: {name: string, email: string, password: string}) {
      state.user.displayName = payload.name;
      firebaseApp.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: payload.name
            });
          console.log('signup mutation', data);
          state.user.userUid = data?.user?.uid;
          // this.$router.push('/');
        })
        .catch(error => console.log(error.message));
    },
    SET_LOGGED_IN (state, value) {
      state.user.isloggedIn = value;
    },
    SET_USER (state, data) {
      state.user.data = data;
    }
  },
  actions: {
    fetchUser (context, user) {
      const { commit } = mod1ActionContext(context);
      // context.commit('SET_LOGGED_IN', user !== null);
      commit.SET_LOGGED_IN(user !== null);
      if (user) {
        commit.SET_USER({
          displayName: user.displayName,
          email: user.email
        });
        // context.commit('SET_USER', {
        //   displayName: user.displayName,
        //   email: user.email
        // });
      } else {
        // context.commit('SET_USER', null);
        // commit.SET_USER(payload:{name: string, email:string});
      }
    },
    onLogIn (context, payload: {email: string, password: string}) {
      console.log(context.state);
      const { commit } = mod1ActionContext(context);
      commit.ON_LOG_IN(payload);
    },
    onSignUp (context, payload: {name: string, email: string, password: string}) {
      console.log(context.state);
      const { commit } = mod1ActionContext(context);
      commit.ON_SIGN_UP(payload);
    }
  }

});

export default user;
const mod1ActionContext = (context: any) => moduleActionContext(context, user)
;
