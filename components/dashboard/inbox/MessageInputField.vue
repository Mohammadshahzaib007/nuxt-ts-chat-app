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
              $plus
            </v-icon>
          </v-btn>
        </template>
        <v-btn
          fab
          dark
          small
          color="#2A8BF2"
        >
          <v-icon>$file</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="#2A8BF2"
        >
          <v-icon>$image</v-icon>
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
        height="100%"
        hide-details=""
        append-icon="$smile"
        class="textFieldMsg "
        placeholder="Type a message here"
        solo
      />
      <div
        class="d-flex align-center justify-center ml-8"
        style="width: 40px; height: 40px; border-radius: 100%; background: linear-gradient(325.78deg, #2A8BF2 14.76%, #7CB8F7 87.3%); box-shadow: 4px 4px 25px rgba(42, 139, 242, 0.15), 2px 2px 25px rgba(42, 139, 242, 0.05), 4px 6px 10px rgba(42, 139, 242, 0.15);"
      >
        <v-icon color="white">
          $navigation
        </v-icon>
      </div>
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component
export default class MessageInputField extends Vue {

}
</script>

<style lang="scss" scoped>
.textFieldMsg ::v-deep .v-input__slot{
  box-shadow: none !important;
  border: none;
  outline: none;
}
</style>
