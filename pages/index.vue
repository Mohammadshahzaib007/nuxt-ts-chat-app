<template>
  <Dashboard />
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';

import { store } from '../store';
import firebaseApp from '../firebase';

@Component
export default class Index extends Vue {
  mounted () {
    firebaseApp.auth().onAuthStateChanged((user) => {
      // store.dispatch('user/fetchUser', user);
      store.dispatch.fetchUser(user);
      console.log('dispatched');
    });
  }
};
</script>
