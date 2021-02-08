<template>
  <v-card
    elevation="0"
    class="mr-15"
    width="53.125rem"
    height="58.125rem"
  >
    <!-- Inbox Header -->
    <v-sheet
      color="#FAFBFF"
      class="d-flex justify-space-between align-center"
      height="6.875rem"
      style="border-radius: 6px 6px 0px 0px; border-bottom: 2px solid rgba(112, 124, 151, 0.1);"
    >
      <v-sheet
        color="tranparent"
        class="d-flex align-center ml-15"
      >
        <v-avatar
          width="54"
          height="54"
          style="overflow: visible"
        >
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          >
          <v-badge
            v-if="isOnline"
            bordered
            bottom
            color="#00C305"
            dot
            style="border: 1.5px solid #FFFFFF;"
            offset-x="50"
            offset-y="24"
          /></v-badge>
        </v-avatar>
        <div
          style="height: fit-content; color: transparent"
          class="ml-4"
        >
          <h2
            style="font-size: 18px; line-height: 21px; color: #0D1C2E; font-weight: normal"
          >
            Shahzaib
          </h2>
          <p
            v-if="currentCommunicationStatus === 'write'"
            class="px-0 py-0"
            style="font-size: 16px; display: inline; line-height: 19px; color: #2A8BF2;"
          >
            ..writes
          </p>

          <p
            v-else-if="currentCommunicationStatus === 'record'"
            class="px-0 py-0 d-flex align-center mt-1"
            style="font-size: 16px;  line-height: 19px; color: #2A8BF2;"
          >
            <span
              class="d-flex align-center justify-center mr-2"
              style="width: 12px; height: 12px; border-radius: 100%; display: inline; margin-top: 4px; background: rgba(42, 139, 242, 0.25); color: #2A8BF2;"
            >
              <span style="width: 4px; height: 4px; border-radius: 100%; display: inline; background-color: #2A8BF2" />
            </span>
            records voice message
          </p>
          <p
            v-else
            class="px-0 py-0"
            style="font-size: 16px; display: inline; line-height: 19px; color: #2A8BF2;"
          >
            last online 5 hours ago
          </p>
        </div>
      </v-sheet>
      <v-sheet
        color="transparent"
        style="margin-right: 2.375rem"
        class="d-flex"
      >
        <div
          class="d-flex align-center justify-center mr-5"
          style="width: 52px;height: 52px; border-radius: 100%; background: #fff; box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.03), 0px 7px 25px rgba(42, 139, 242, 0.03), 0px 5px 25px rgba(42, 139, 242, 0.07);"
        >
          <v-icon>$attach</v-icon>
        </div>
        <div
          class="d-flex align-center justify-center"
          style="width: 52px;height: 52px; border-radius: 100%; background: #fff; box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.03), 0px 7px 25px rgba(42, 139, 242, 0.03), 0px 5px 25px rgba(42, 139, 242, 0.07);"
        >
          <v-icon>$moreVertical</v-icon>
        </div>
      </v-sheet>
    </v-sheet>

    <MessagesContainer />
    <MessageInputField />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Inbox extends Vue {

}
</script>

<style>

</style>
