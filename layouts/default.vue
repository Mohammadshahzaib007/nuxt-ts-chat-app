<template>
  <v-app>
    <v-main style="background: linear-gradient(180deg, #F3F3FB 0%, #FDFBFD 100%);">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <SideNav />
  </v-app>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Default extends Vue {};
</script>
