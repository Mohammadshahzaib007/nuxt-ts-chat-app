<template>
  <Dashboard />
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';
import firebaseApp from '~/firebase';
import { store } from '~/store';

@Component
export default class Index extends Vue {
  get user () {
    return store.getters.isUser;
  }

  mounted () {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        store.dispatch.setuser(user);
        store.commit.SET_USER_DISPLAY_NAME(user.displayName);
        store.commit.SET_USER_UID(user.uid);
      } else {
        store.dispatch.setuser(null);
        this.$router.push('/loginpage');
      }
    });
  }
};
</script>
