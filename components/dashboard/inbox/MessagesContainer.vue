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
    <MessageReciverBox
      msg="Can I send you files?"
      last-msg-time="4 days ago"
    />

    <MessageSenderBox
      msg="Hey! Okay, send out."
      last-msg-time="4 days ago"
    />
    <MessageReciverBox
      :is-photo-visible="true"
      is-file="Style.zip"
      last-msg-time="4 days ago"
    />
    <v-sheet class="d-flex align-center">
      <span style=" width: 300px; height: 0.0625rem; border-radius: 2px; background: rgba(112, 124, 151, 0.15);" />
      <!-- class="mr-16 text-right" -->
      <p
        class="my-0 mx-2 px-0 py-0"
        style="font-size: 0.875rem; color: rgba(112, 124, 151, 0.7);"
      >
        3 days ago
      </p>
      <span style=" width: 18.75rem; height: 0.0625rem; border-radius: 2px; background: rgba(112, 124, 151, 0.15);" />
    </v-sheet>

    <MessageSenderBox
      msg="Hello! I tweaked everything you asked. I am sending the finished file."
      last-msg-time="3 days ago"
      is-there-a-file="(52.05 Mb) New_Style.zip"
    />
    <MessageSenderBox
      msg="This has been coded by Shahzaib"
      last-msg-time="3 days ago"
    />
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class MessagesContainer extends Vue {

}
</script>
