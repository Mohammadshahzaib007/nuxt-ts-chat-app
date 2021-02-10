<template>
  <v-sheet
    width="fit-content"
    class="mb-4 mt-4"
  >
    <v-sheet
      color="transparent"
      class="d-flex "
    >
      <v-avatar

        :style="!isPhotoVisible && {'visibility': 'hidden'}"
        width="36"
        height="36"
        style="overflow: visible"
        class="mr-4"
      >
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>
      <div

        class="d-flex align-center justify-center flex-column pt-3 pr-5 pl-7"
        style="max-width: 520px; min-height: 3.125rem; background: linear-gradient(90.54deg, #60A9F6 0%, #2A8BF2 100%);
                box-shadow: 10px 10px 25px rgba(42, 139, 242, 0.1), 15px 15px 35px rgba(42, 139, 242, 0.05), 10px 10px 50px rgba(42, 139, 242, 0.1); border-radius: 0px 10px 10px 10px;"
      >
        <p
          v-if="msg"
          style="font-size: 1rem; color: #fff; line-height: 26px;"
        >
          {{ msg }}
        </p>

        <v-sheet
          v-if="isFile"
          color="transparent"
          class="d-flex align-center mb-4"
        >
          <v-icon
            color="#2A8BF2"
            class="mr-5"
            style="background: rgba(255, 255, 255, 0.25)"
            size="40"
          >
            $file
          </v-icon>
          <div>
            <p
              class="mb-0"
              style="font-size: 1rem; color: #fff; line-height: 26px;"
            >
              Style.zip
            </p>
            <p
              class="mb-0"
              style="font-size: 0.875rem; color: rgba(255, 255, 255, 0.7); line-height: 26px;"
            >
              41.36Mb
            </p>
          </div>
        </v-sheet>
      </div>

      <v-icon
        class="align-self-center"
        color="#B7BDCB"
        style="margin-left: 18px"
      >
        $moreHorizontal
      </v-icon>
    </v-sheet>
    <p
      v-if="lastMsgTime"
      class="mr-11 text-right mt-1"
      style="font-size: 0.875rem; color: rgba(112, 124, 151, 0.7);"
    >
      {{ lastMsgTime }}
    </p>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class MessageReciverBox extends Vue {
    @Prop()
    isPhotoVisible!: boolean

    @Prop()
    msg!: string

    @Prop()
    lastMsgTime!: string;

    @Prop()
    isFile!: string
}

</script>
