<template>
  <v-sheet
    color="transparent"
    height="45.5rem"
    style="overflow: auto"
    class="pl-15 pr-15"
  >
    <MessageReciverBox
      :is-photo-visible="true"
      msg="Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application."
    />
    <MessageReciverBox msg="Can I send you files?" />

    <MessageSenderBox msg="Hey! Okay, send out." />
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class MessagesContainer extends Vue {

}
</script>
