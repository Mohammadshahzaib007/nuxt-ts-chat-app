<template>
  <v-app>
    <v-main style="background: linear-gradient(180deg, #F3F3FB 0%, #FDFBFD 100%);">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class PlanLayout extends Vue {};
</script>
