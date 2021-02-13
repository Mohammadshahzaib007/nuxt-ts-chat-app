<template>
  <v-sheet
    color="transparent"
    class="d-flex align-center justify-center"
    height="89px"
  >
    <v-sheet
      class="d-flex align-center justify-center"
      width="45.125rem"
      height="100%"
      style="border-top: 2px solid rgba(112, 124, 151, 0.15)"
    >
      <v-speed-dial class="mr-5">
        <template #activator>
          <v-btn
            v-model="fab"
            width="40px"
            height="40px"

            style="background: linear-gradient(325.78deg, #2A8BF2 14.76%, #7CB8F7 87.3%)"
            dark
            fab
          >
            <v-icon v-if="fab">
              mdi-close
            </v-icon>
            <v-icon v-else>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
        <v-btn
          fab
          dark
          small
          color="#2A8BF2"
        >
          <v-icon>mdi-file-document-outline</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="#2A8BF2"
        >
          <v-icon> mdi-image-outline</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="#2A8BF2"
        >
          <v-icon>$film</v-icon>
        </v-btn>
      </v-speed-dial>

      <v-text-field
        v-model="enteredMsg"
        height="100%"
        hide-details
        append-icon="$smile"
        class="textFieldMsg "
        placeholder="Type a message here"
        solo
        @keyup.enter="sendMsg"
      />
      <div
        class="d-flex align-center justify-center ml-8"
        style="width: 40px; height: 40px; border-radius: 100%; background: linear-gradient(325.78deg, #2A8BF2 14.76%, #7CB8F7 87.3%); box-shadow: 4px 4px 25px rgba(42, 139, 242, 0.15), 2px 2px 25px rgba(42, 139, 242, 0.05), 4px 6px 10px rgba(42, 139, 242, 0.15);"
      >
        <v-btn
          fab
          dark
          small
          color="primary"
          @click="sendMsg"
        >
          <v-icon color="white">
            mdi-near-me
          </v-icon>
        </v-btn>
      </div>
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { store } from '@/store/';
import firebaseApp from '../../../firebase.js';

@Component
export default class MessageInputField extends Vue {
  enteredMsg = ''

  sendMsg () {
    if (this.enteredMsg === '') {
      return;
    }
    // firebase database refrence
    const msgRef = firebaseApp.database().ref('messages');
    // pushing data to the server
    const data = {
      content: this.enteredMsg,
      userUid: this.userUid,
      msgSentTime: new Date().toDateString()
    };
    msgRef.push(data);
    this.enteredMsg = '';
  }

  get userUid () : string | null | undefined {
    return store.getters.userUid;
  }
}
</script>

<style lang="scss" scoped>
.textFieldMsg ::v-deep .v-input__slot{
  box-shadow: none !important;
  border: none;
  outline: none;
}
</style>
