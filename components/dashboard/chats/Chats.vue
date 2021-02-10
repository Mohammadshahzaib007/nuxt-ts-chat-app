<template>
  <v-sheet
    color="transparent"
    width="37.3125rem"
    max-height="58.125rem"
    style="overflow: hidden"
  >
    <v-sheet
      color="transparent"
      class="d-flex justify-space-between pr-4"
    >
      <div>
        <h1
          style="font-size: 2.25rem; color: #0D1C2E; line-height: 26px; font-weight: normal;letter-spacing: 0.01em;
                text-transform: capitalize;"
        >
          Chats
        </h1>
        <p
          style="font-size: 1.125rem; line-height: 26px; color: #707C97; margin-top: 0.9375rem;text-transform: capitalize;"
        >
          Recents Chats
          <v-icon
            color="#707C97"
          >
            mdi-chevron-down
          </v-icon>
        </p>
      </div>
      <v-btn
        width="240px"
        height="60px"
        class="px-6 text-capitalize font-weight-bold"
        style="font-size: 20px; line-height: 24px; background: linear-gradient(92.68deg, #7CB8F7 0%, #2A8BF2 100%);
                box-shadow: 6px 6px 25px rgba(42, 139, 242, 0.15), 4px 4px 25px rgba(42, 139, 242, 0.05), 10px 6px 25px rgba(42, 139, 242, 0.15);
                border-radius: 6px; color: #ffffff;"
      >
        <v-icon
          style="margin-right: 7px"
          color="#ffffff"
        >
          mdi-plus
        </v-icon>
        Create new Chat
      </v-btn>
    </v-sheet>

    <SearchBar />
    <v-sheet
      id="card-container"
      color="transparent"
      max-height="50.625rem"
      class="mt-5 pr-2"
    >
      <ChatCard
        current-communication-status="write"
        type-of-sent-data="text"
        user-name="Luy Robin"
        number-of-message="2"
        time-of-send-message="1 minute ago"
        :is-online="true"
        message="Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes)."
      />
      <ChatCard
        current-communication-status="record"
        user-name="Jared Sunn"
        :has-photo-recived="true"
        :has-file-recived="true"
        number-of-message="1"
        :is-online="true"
        time-of-send-message="1 minute ago"
      />
      <ChatCard
        type-of-sent-data="text"
        user-name="Luy Robin"
        time-of-send-message="3 days ago"
        message="Cicero famously orated against his political opponent Lucius Sergius Catilina."
      />
      <ChatCard
        type-of-sent-data="text"
        user-name="Luy Robin"
        time-of-send-message="3 days ago"
        message="Cicero famously orated against his political opponent Lucius Sergius Catilina."
      />
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Chats extends Vue {

}
</script>

<style lang="scss" scoped>
#card-container {
  overflow: auto;
  &::-webkit-scrollbar{
    width: 6px;
    height: 77px !important;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #B7BDCB;

  }

}
</style>
