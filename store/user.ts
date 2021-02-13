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
    user (state: UserState) {
      return state.user;
    },
    displayName (state: UserState) {
      return state.user.displayName;
    },
    userUid (state: UserState) {
      return state.user.ActiveUserUid;
    }
  },
  mutations: {
    // ON_LOG_IN (state, payload: {email: string, password: string}) {

    // },
    ON_SIGN_UP (state: UserState, payload: {name: string}) {
      state.user.displayName = payload.name;
    },
    SET_LOGGED_IN (state: UserState, value) {
      state.user.isloggedIn = value;
    },
    SET_USER (state: UserState, data) {
      state.user.data = data;
    },
    SET_USER_DISPLAY_NAME (state: UserState, payload: string | null) {
      state.user.displayName = payload;
    },
    SET_USER_UID (state: UserState, payload: string |null | undefined) {
      state.user.ActiveUserUid = payload;
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
    login (context, payload: {email: string, password: string}):Promise<void> {
      const { commit } = mod1ActionContext(context);
      // Modern
      return new Promise((resolve, reject) => {
        (async () => {
          console.log(payload);
          try {
            const res = await firebaseApp.auth().signInWithEmailAndPassword(payload.email, payload.password);
            commit.SET_USER_DISPLAY_NAME(res.user?.displayName);
            commit.SET_USER_UID(res.user?.uid);

            // throw new Error('error..');

            resolve();
          } catch (err) {
            reject(err);
          }
        })();
      });
    },

    signup (context, payload: {name: string, email: string, password: string}): Promise<void> {
      const { commit, state } = mod1ActionContext(context);
      state.user.displayName = payload.name;
      return new Promise<void>((resolve, reject) => {
        (async () => {
          try {
            const res = await firebaseApp.auth().createUserWithEmailAndPassword(payload.email, payload.password);
            res.user?.updateProfile({
              displayName: payload.name
            });
            // commit.SET_USER_DISPLAY_NAME(res.user?.displayName);
            commit.SET_USER_UID(res.user?.uid);

            resolve();
          } catch (err) {
            reject(err);
          }
        })();
      });
    },

    logout (): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        // firebaseApp.auth().signOut().then(() => resolve()).catch(err => reject(err));
        (async () => {
          await firebaseApp.auth().signOut();
          try {
            resolve();
          } catch (err) {
            reject(err);
          }
        })();
      });
    }
  }

});

export default user;
const mod1ActionContext = (context: any) => moduleActionContext(context, user)
;
