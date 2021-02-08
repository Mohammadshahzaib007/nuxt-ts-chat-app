<template>
  <v-sheet
    color="white"
    height="4.375rem"
    class="d-flex search-bar"
    style="border-radius: 6px; overflow: hidden"
  >
    <v-text-field
      class="inputField"
      height="4.375rem"
      hide-details=""

      style="max-width: 24.9375rem; box-shadow: none; border-right: 2px solid #F5F4FB"
      solo
      label="Search"
      prepend-inner-icon="$search"
    />
    <v-select
      hide-details=""
      label="Messages"
      :items="['WhatsApp', 'Facebook']"
      class="select"
      height="4.375rem"
      style="box-shadow: none; max-width: 141px; border: none; margin-left: 1rem;"
      dense
      solo
      append-icon="mdi-chevron-down"
    />
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class SearchBar extends Vue {

}
</script>

<style lang="scss" scoped>
.select ::v-deep .v-input__slot{
  box-shadow: none !important;
  border: none;
  outline: none;
}
.inputField ::v-deep .v-input__slot  {
  box-shadow: none !important;
}
</style>
