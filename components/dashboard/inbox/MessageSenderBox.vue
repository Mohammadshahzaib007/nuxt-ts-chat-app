<template>
  <v-sheet color="transparent">
    <v-sheet
      color="transparent"
      class="d-flex  mb-4 mt-7 justify-end"
    >
      <v-icon
        class="align-self-center"
        color="#B7BDCB"
        style="margin-right: 14px"
      >
        $moreHorizontal
      </v-icon>
      <div
        class="d-flex align-center justify-center pt-3 pr-5 pl-7"
        style="max-width: 520px; min-height: 3.125rem;background: #FFFFFF; border-radius: 10px 10px 0px 10px;
        border: 1px solid rgba(112, 124, 151, 0.25); box-sizing: border-box; box-shadow: 10px 10px 25px rgba(112, 124, 151, 0.05), 15px 15px 35px rgba(112, 124, 151, 0.05);"
      >
        <p style="font-size: 1rem; color: #707C97; line-height: 26px;">
          {{ msg }}
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
    <p>hello</p>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class MessageSenderBox extends Vue {
    @Prop()
    msg!: string
}
</script>
