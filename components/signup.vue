<template>
  <v-card
    width="28.125rem"
    class="px-10 py-10"
  >
    <h1 class="font-weight-light mb-5">
      Create new account
    </h1>
    <v-form
      ref="form"
      @submit.prevent="onSignUp"
    >
      <v-text-field
        v-model="enteredName "
        label="Enter You Name"
        outlined
        :rules="[val => (val || '').length > 0 || 'This field is required']"
      />
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
        Signup
      </v-btn>
    </v-form>
    <nuxt-link
      to="/loginPage"
      class="mt-2 d-inline-block"
    >
      Already have an account? Login
    </nuxt-link>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import firebaseApp from '../firebase.js';

@Component
export default class Login extends Vue {
  enteredName = ''
  enteredEmail = ''
  enteredPassword = ''

  onSignUp () {
    if (this.$refs.form.validate()) {
      firebaseApp.auth().createUserWithEmailAndPassword(this.enteredEmail, this.enteredPassword)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.enteredName
            });
          console.log(data);
          this.$router.push('/');
        })
        .catch(error => console.log(error.message));
    }
  }
}
</script>
