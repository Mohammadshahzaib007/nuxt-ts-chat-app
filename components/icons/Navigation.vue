
<template>
  <svg
    width="21"
    height="22"
    viewBox="0 0 21 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      id="Icon/Fill/navigation-2"
      filter="url(#filter0_dd)"
    >
      <path
        id="Mask"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.3891 18.3333C12.3716 18.3333 12.355 18.3325 12.3383 18.3316C11.9616 18.3091 11.6475 18.0358 11.5725 17.6658L10.2908 11.36C10.2241 11.0316 9.96831 10.7758 9.63998 10.7091L3.33414 9.42663C2.96414 9.35247 2.69081 9.0383 2.66831 8.66163C2.64581 8.28413 2.87831 7.93913 3.23664 7.8208L16.57 3.37663C16.8691 3.27497 17.1991 3.3533 17.4225 3.57747C17.6458 3.8008 17.7233 4.1308 17.6241 4.42997L13.1791 17.7633C13.0658 18.1058 12.7458 18.3333 12.3891 18.3333Z"
        fill="#231F20"
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="2"
        y="3"
        width="16"
        height="16"
      >
        <path
          id="Mask_2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.3891 18.3333C12.3716 18.3333 12.355 18.3325 12.3383 18.3316C11.9616 18.3091 11.6475 18.0358 11.5725 17.6658L10.2908 11.36C10.2241 11.0316 9.96831 10.7758 9.63998 10.7091L3.33414 9.42663C2.96414 9.35247 2.69081 9.0383 2.66831 8.66163C2.64581 8.28413 2.87831 7.93913 3.23664 7.8208L16.57 3.37663C16.8691 3.27497 17.1991 3.3533 17.4225 3.57747C17.6458 3.8008 17.7233 4.1308 17.6241 4.42997L13.1791 17.7633C13.0658 18.1058 12.7458 18.3333 12.3891 18.3333Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)">
        <g id="&#240;&#159;&#142;&#168; Color">
          <rect
            id="Base"
            x="1"
            width="20"
            height="20"
            fill="white"
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_dd"
        x="-1"
        y="-1"
        width="24"
        height="24"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood
          flood-opacity="0"
          result="BackgroundImageFix"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="0.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow"
          result="effect2_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component
export default class Navigtation extends Vue {}
</script>
<style lang="scss" scoped>
path{
  fill: currentColor;
}
</style>
