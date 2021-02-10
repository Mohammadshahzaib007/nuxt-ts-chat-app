<template>
  <v-sheet
    color="transparent"
    class="mb-4 mt-7"
  >
    <v-sheet
      color="transparent"
      class="d-flex   justify-end"
    >
      <v-icon
        class="align-self-center"
        color="#B7BDCB"
        style="margin-right: 14px"
      >
        $moreHorizontal
      </v-icon>
      <div
        class="d-flex align-center flex-column justify-center pt-3 pr-5 pl-7"
        style="max-width: 416px; min-height: 3.125rem;background: #FFFFFF; border-radius: 10px 10px 0px 10px;
        border: 1px solid rgba(112, 124, 151, 0.25); box-sizing: border-box; box-shadow: 10px 10px 25px rgba(112, 124, 151, 0.05), 15px 15px 35px rgba(112, 124, 151, 0.05);"
      >
        <p style="font-size: 1rem; color: #707C97; line-height: 26px;">
          {{ msg }}
        </p>
        <p
          v-if="isThereAFile"
          class="mx-0 my-0 mb-4 align-self-end"
          style="font-size: 16px; line-height: 26px; color: #2A8BF2;"
        >
          {{ isThereAFile }} <v-icon color="#2A8BF2">
            $file
          </v-icon>
        </p>
      </div>
      <v-icon
        class="align-self-center"
        color="#B7BDCB"
        style="margin-left: 13px"
      >
        $allDone
      </v-icon>
    </v-sheet>
    <p
      v-if="lastMsgTime"
      class="text-right mr-16 mt-1"
      style="font-size: 0.875rem; color: rgba(112, 124, 151, 0.7);"
    >
      {{ lastMsgTime }}
    </p>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class MessageSenderBox extends Vue {
    @Prop()
    msg!: string

    @Prop()
    lastMsgTime!: string;

     @Prop()
    isThereAFile!: string;
}
</script>
