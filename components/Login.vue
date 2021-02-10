<template>
  <v-card
    width="28.125rem"
    class="px-10 py-10"
  >
    <h1 class="font-weight-light mb-5">
      Login to your account
    </h1>
    <v-form
      ref="loginForm"
      @submit.prevent="onLogin"
    >
      <v-text-field
        v-model="enteredEmail"
        label="Enter You Email"
        outlined
        :rules="[val => (val || '').length > 0 || 'This field is required']"
      />
      <v-text-field
        v-model="enteredPassword"
        label="Enter Your Password"
        type="password"
        :rules="[val => (val || '').length > 0 || 'This field is required']"
        outlined
      />
      <v-btn
        block
        color="primary"
        type="submit"
      >
        Login
      </v-btn>
    </v-form>
    <nuxt-link
      to="/signupPage"
      class="mt-2 d-inline-block"
    >
      Don't have an account? signup
    </nuxt-link>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import firebaseApp from '../firebase.js';

@Component
export default class Login extends Vue {
  enteredEmail = ''
  enteredPassword = ''

  onLogin () {
    if (this.$refs.loginForm.validate()) {
      firebaseApp.auth().signInWithEmailAndPassword(this.enteredEmail, this.enteredPassword)
        .then((data) => {
          console.log(data);
          this.$router.push('/');
        })
        .catch(error => console.log(error.message));
    }
  }
}
</script>
