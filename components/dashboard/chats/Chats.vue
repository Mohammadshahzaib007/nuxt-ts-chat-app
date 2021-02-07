<template>
  <v-sheet
    color="transparent"
    width="37.3125rem"
  >
    <v-sheet
      color="transparent"
      class="d-flex justify-space-between"
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
        width="15rem"
        height="3.75rem"
        class="px-0 py-0 text-capitalize"
        style="font-size: 1.25rem; line-height: 24px; background: linear-gradient(92.68deg, #7CB8F7 0%, #2A8BF2 100%);
                box-shadow: 6px 6px 25px rgba(42, 139, 242, 0.15), 4px 4px 25px rgba(42, 139, 242, 0.05), 10px 6px 25px rgba(42, 139, 242, 0.15);
                border-radius: 6px; color: #ffffff"
      >
        <v-icon
          style="margin-right: 0.4375rem"
          color="#ffffff"
        >
          mdi-plus
        </v-icon>
        Create new Chat
      </v-btn>
    </v-sheet>

    <SearchBar />
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Chats extends Vue {

}
</script>
