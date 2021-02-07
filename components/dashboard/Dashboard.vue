<template>
  <v-container class="px-0 py-0">
    <v-row style="margin-top: 6.8125rem">
      <v-col
        cols="6"
        class="px-0 py-0 d-flex align-center flex-column"
      >
        <Chats />
      </v-col>
      <v-col
        cols="6"
        class="px-0 py-0 d-flex align-center flex-column"
      >
        <Inbox />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Dashboard extends Vue {

}
</script>
