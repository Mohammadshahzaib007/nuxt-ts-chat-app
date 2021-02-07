<template>
  <v-navigation-drawer
    color="#FFFFFF"
    width="18.125rem"
    app
    permanent
    absolute
    style="box-shadow: 14.0351px 0px 25px rgba(86, 128, 248, 0.03), 35.0877px 0px 70px rgba(86, 128, 248, 0.05), 23.8596px 5.61404px 50px rgba(0, 0, 0, 0.02);"
  >
    <v-container
      class="fill-height"
      style="max-height: 108opx; max-width: 242px; padding: 0"
    >
      <v-row
        class="fill-height"
      >
        <v-col
          cols="12"
          class="d-flex  flex-column py-0 px-0 pl-7"
        >
          <v-sheet
            color="transparent"
            width="fit-content"
            class="d-flex flex-column"
          >
            <v-avatar
              width="86"
              height="86"
              class="align-self-center"
              style="margin-top: 87px"
            >
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-avatar>
            <p
              style="font-size: 1.125rem; color: #0D1C2E; line-height: 21px; cursor: pointer"
              class="mt-4 align-slef-center"
            >
              Henry Jabbawockiez <v-icon
                color="#0D1C2E"
              >
                mdi-chevron-down
              </v-icon>
            </p>
          </v-sheet>

          <v-list
            dense
            nav
            style="margin-top: 4.6875rem"
            class="px-0 py-0"
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              class="px-0 py-0 mb-3"
              link
            >
              <v-list-item-icon class="px-0 py-0 mr-4">
                <v-icon color="#707C97">
                  ${{ item.icon }}
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content class="px-0 py-0">
                <v-list-item-title
                  class="text-uppercase"
                  style="font-size: 1rem; color: #707C97"
                >
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-btn
            text
            style="font-size: 1rem; color: #707C97; line-height: 19px;"
            class="mt-auto mb-10 text-uppercase px-0 py-0"
            width="fit-content"
          >
            <v-icon
              color="#707C97"
              class="mr-4"
            >
              $power
            </v-icon>   Log out
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class SideNav extends Vue {
    items: Array<{
        title: string;
        icon: string;
    }> = [
      { title: 'Home', icon: 'grid' },
      { title: 'Chat', icon: 'message' },
      { title: 'Contact', icon: 'person' },
      { title: 'Notifications', icon: 'bell' },
      { title: 'Calendar', icon: 'calendar' },
      { title: 'Settings', icon: 'settings' }
    ]

    mounted () {
    }
}
</script>
