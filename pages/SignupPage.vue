<template>
  <section style="width: 100%; height: 100vh">
    <v-container class="fill-height d-flex align-center justify-center">
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
            v-model="name "
            label="Enter You Name"
            outlined
            :rules="[val => (val || '').length > 0 || 'This field is required']"
          />
          <v-text-field
            v-model="email"
            label="Enter You Email"
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
          <p style="color: red; font-size: 14px; margin: 15px 0">
            {{ err }}
          </p>
          <v-btn
            block
            color="primary"
            type="submit"
            :loading="acctionLoading"
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
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'nuxt-property-decorator';
import { store } from '@/store'; ;

@Component({
  layout: 'planLayout'
})
export default class Signup extends Vue {
  @Ref('form') form!: HTMLFormElement;
  name = ''
  email = ''
  password = ''
  acctionLoading = false
  err: null | string = ''

  async onSignUp () {
    if (!this.form.validate()) { return; }
    try {
      this.acctionLoading = true;
      await store.dispatch.signup({ name: this.name, email: this.email, password: this.password });
      this.$router.push('/');
    } catch (err) {
      this.err = err.message;
    } finally {
      this.acctionLoading = false;
    }
    // store.dispatch.signup({ name: this.name, email: this.email, password: this.password }).then(() => {
    //   this.$router.push('/');
  };
}

</script>
