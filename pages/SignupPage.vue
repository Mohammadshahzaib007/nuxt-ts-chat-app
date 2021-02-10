<template>
  <section style="width: 100%; height: 100vh">
    <v-container class="fill-height d-flex align-center justify-center">
      <Signup />
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  layout: 'planLayout'
})
export default class SignupPage extends Vue {

}
</script>
