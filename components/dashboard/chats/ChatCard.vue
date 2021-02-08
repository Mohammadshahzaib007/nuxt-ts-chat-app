<template>
  <!-- height="fit-content" -->
  <v-card
    class="mx-auto px-7 py-10 mt-5"
    style="border-radius: 6px;"
    max-width="36.25rem"
    min-height="13.75rem"
    elevation="0"
  >
    <v-sheet
      color="transparent"
      class="d-flex justify-space-between align-center"
    >
      <v-sheet
        color="tranparent"
        class="d-flex align-center"
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
          style="height: fit-content"
          class="ml-4"
        >
          <h2
            style="font-size: 18px; line-height: 21px; color: #0D1C2E; font-weight: normal"
          >
            {{ userName }}
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
      <p
        style="font-size: 1rem; line-height: 19px; text-transform: lowercase; color: #707C97;"
      >
        1 minute ago
      </p>
    </v-sheet>
    <v-sheet
      color="transparent"
      class="mt-4 d-flex justify-space-between"
    >
      <p
        v-if="typeOfSentData === 'text'"
        style="font-size: 16px; line-height: 26px; color: #707C97; max-width: 28.125rem"
      >
        {{ message }}
        <!-- Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). -->
      </p>
      <p
        v-else
        style="font-size: 16px; line-height: 26px; color: #707C97; max-width: 28.125rem"
      >
        <v-icon size="14">
          $mic
        </v-icon> Voice message (01:15)
      </p>
      <div
        v-if="numberOfMessage"
        class="d-flex align-center justify-center"
        style="width: 20px; height: 20px; background: #FF3366; border-radius: 100%; color: #fff; box-shadow: 4px 4px 15px rgba(198, 27, 74, 0.05), 2px 2px 10px rgba(198, 27, 74, 0.1), 1px 1px 50px rgba(198, 27, 74, 0.15);"
      >
        {{ numberOfMessage }}
      </div>
    </v-sheet>
    <v-card-actions>
      <v-btn
        v-if="hasFileRecived"
        width="6.875rem"
        height="2.5rem"
        rounded
        elevation="0"
        color="rgba(42, 139, 242, .25)"
        style="color: #2A8BF2; font-size: 0.875rem"
        class="text-capitalize"
      >
        <v-icon

          left
          size="20"
          color="#2A8BF2"
          style="margin-right: 0.3125rem"
        >
          <!-- mdi-file-document-outline -->
          $fileText
        </v-icon>
        Fiels(x2)
      </v-btn>

      <v-btn
        v-if="hasPhotoRecived"
        width="5.875rem"
        height="2.5rem"
        rounded
        elevation="0"
        color="rgba(255, 51, 102, 0.25)"
        style="color: #FF3366; font-size: 0.875rem"
        class="text-capitalize ml-4"
      >
        <v-icon
          left
          size="20"
          color="#FF3366"
          style="margin-right: 0.3125rem"
        >
          <!-- mdi-file-document-outline -->
          $image
        </v-icon>
        Photo
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component
export default class ChatCard extends Vue {
@Prop()
currentCommunicationStatus!: string

@Prop()
hasPhotoRecived!: boolean

@Prop()
hasFileRecived!: boolean

@Prop()
typeOfSentData!: string

@Prop()
userName: string

@Prop()
message: string

@Prop()
numberOfMessage: string
}
</script>

<style>
.yo {
    color: rgba(42, 139, 242, .25)
}
</style>
