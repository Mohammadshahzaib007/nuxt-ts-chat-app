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
    },

    messages: []
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
    },
    messages (state: UserState) {
      return state.messages;
    },
    isUser (state: UserState) {
      return state.user.data;
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
            const user = firebaseApp.auth().currentUser;
            commit.SET_USER_DISPLAY_NAME(res.user?.displayName);
            commit.SET_USER_UID(res.user?.uid);
            commit.SET_USER(user);

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
            const user = firebaseApp.auth().currentUser;
            res.user?.updateProfile({
              displayName: payload.name
            });
            // commit.SET_USER_DISPLAY_NAME(res.user?.displayName);
            commit.SET_USER_UID(res.user?.uid);
            commit.SET_USER(user);

            resolve();
          } catch (err) {
            reject(err);
          }
        })();
      });
    },

    logout (context): Promise<void> {
      const { commit } = mod1ActionContext(context);
      return new Promise<void>((resolve, reject) => {
        // firebaseApp.auth().signOut().then(() => resolve()).catch(err => reject(err));
        (async () => {
          await firebaseApp.auth().signOut();
          try {
            commit.SET_USER(null);
            resolve();
          } catch (err) {
            reject(err);
          }
        })();
      });
    },

    setuser (context, payload) {
      const { commit } = mod1ActionContext(context);
      commit.SET_USER(payload);
    },

    // fetching msg from firebase
    fetchMsg (context) {
      const { state } = mod1ActionContext(context);
      return new Promise((resolve, reject) => {
        (async () => {
        // firebase database refrence
          const msgRef = firebaseApp.database().ref('messages');

          msgRef.on('value', (snapshot) => {
            const data = snapshot.val();

            console.log(data);
            const messages:Array<{
              id: string,
              userUid: string |null | undefined,
              content: string,
              msgSentTime: Date
            }> = [];
            Object.keys(data).map((key) => {
              messages.push({
                id: key,
                userUid: data[key].userUid,
                content: data[key].content,
                msgSentTime: data[key].msgSentTime
              });
            });

            state.messages = messages;
          });
        })();
      });
    },

    // adding actions for chat
    sendMsg (context, payload:string): Promise<void> {
      const { state } = mod1ActionContext(context);

      return new Promise<void>((resolve, reject) => {
        (async () => {
          // firebase database refrence
          const msgRef = firebaseApp.database().ref('messages');
          await msgRef.push({
            content: payload,
            userUid: state.user.ActiveUserUid,
            msgSentTime: new Date().toDateString()
          });
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
