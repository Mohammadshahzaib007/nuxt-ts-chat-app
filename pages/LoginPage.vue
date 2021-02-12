<template>
  <section style="width: 100%; height: 100vh">
    <v-container class="fill-height d-flex align-center justify-center">
      <v-card
        width="28.125rem"
        class="px-10 py-10"
      >
        <h1 class="font-weight-light mb-5">
          Login to your account
        </h1>
        <v-form
          ref="form"
          @submit.prevent="onLogin"
        >
          <v-text-field
            v-model="email"
            label="Enter You Email"
            type="email"
            outlined
            :rules="[val => (val || '').length > 0 || 'This field is required']"
          />
          <v-text-field
            v-model="password"
            label="Enter Your Password"
            type="password"
            :rules="[val => (val || '').length > 0 || 'This field is required']"
            outlined
          />
          <p
            v-if="error"
            style="font-size: 14px; color: red"
            class="my-2"
          >
            {{ error }}
          </p>
          <v-btn
            block
            color="primary"
            type="submit"
            :loading="isLoading"
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
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'nuxt-property-decorator';

import firebaseApp from '@/firebase.js';
import { store } from '~/store';

@Component({
  layout: 'planLayout'
})
export default class Login extends Vue {
  @Ref('form') form! : HTMLFormElement
  email = ''
  password = ''
  isLoading = false
  error = null

  onLogin () {
    this.isLoading = true;
    if (this.form.validate()) {
      // firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
      //   .then((_data) => {
      //     this.isLoading = false;
      //     this.error = null;

      //     this.$router.push('/');
      //   })
      //   .catch((error) => {
      //     this.isLoading = false;
      //     this.error = error.message;
      //   });
      // const payload = {name: this.name, password: this.password}
      store.dispatch.onLogIn({ email: this.email, password: this.password }).then(() => {
        this.$router.push('/');
      }).catch((err) => {
        this.error = err.message;
      });
    }
    this.isLoading = false;
  }
}
</script>
