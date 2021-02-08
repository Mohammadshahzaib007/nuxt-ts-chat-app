<template>
  <v-sheet
    color="transparent"
    height="45.5rem"
    style="overflow: auto"
    class="pl-15 pr-15"
  >
    <v-sheet
      color="transparent"
      class="d-flex  mb-4 mt-7"
    >
      <v-avatar
        width="54"
        height="54"
        style="overflow: visible"
        class="mr-6"
      >
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>
      <div
        class="d-flex align-center justify-center pt-3 pr-5 pl-7"
        style="width: 520px; height: 85px; background: linear-gradient(90.54deg, #60A9F6 0%, #2A8BF2 100%);
                box-shadow: 10px 10px 25px rgba(42, 139, 242, 0.1), 15px 15px 35px rgba(42, 139, 242, 0.05), 10px 10px 50px rgba(42, 139, 242, 0.1); border-radius: 0px 10px 10px 10px;"
      >
        <p style="font-size: 1rem; color: #fff; line-height: 26px;">
          Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
        </p>
      </div>

      <v-icon
        class="align-self-center"
        color="#B7BDCB"
        style="margin-left: 18px"
      >
        $moreHorizontal
      </v-icon>
    </v-sheet>
    <v-sheet>
      <div
        class="d-flex align-center justify-center pt-3 pr-5 pl-7"
        style="width: 520px; height: 85px; background: linear-gradient(90.54deg, #60A9F6 0%, #2A8BF2 100%);
                box-shadow: 10px 10px 25px rgba(42, 139, 242, 0.1), 15px 15px 35px rgba(42, 139, 242, 0.05), 10px 10px 50px rgba(42, 139, 242, 0.1); border-radius: 0px 10px 10px 10px;"
      >
        <p style="font-size: 1rem; color: #fff; line-height: 26px;">
          Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
        </p>
      </div>
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class MessagesContainer extends Vue {

}
</script>
