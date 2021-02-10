<template>
  <v-container
    class="px-0 d-flex align-center justify-center"
    style="height: 98vh"
  >
    <v-row
      class="d-flex align-cent justify-center"
    >
      <v-col
        cols="5"
        class="px-0 py-0 d-flex align-center flex-column"
      >
        <Chats />
      </v-col>
      <v-col
        cols="6"
        class="px-0 py-0 ml-15 d-flex align-center flex-column"
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
