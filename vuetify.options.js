import colors from 'vuetify/es5/util/colors';
import Bell from '~/components/icons/Bell.vue';
import Calendar from '~/components/icons/Calendar.vue';
import Grid from '~/components/icons/Grid.vue';
import Message from '~/components/icons/Message.vue';
import Person from '~/components/icons/Person.vue';
import Settings from '~/components/icons/Settings.vue';
import Power from '~/components/icons/Power.vue';
import Search from '~/components/icons/Search.vue';
import Mic from '~/components/icons/Mic.vue';
import FileText from '~/components/icons/FileText.vue';
import Image from '~/components/icons/Image.vue';

export default {
  theme: {
    light: true,
    themes: {
      light: {
        primary: '#2A8BF2',
        accent: colors.grey.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  },
  icons: {
    values: {
      bell: {
        component: Bell
      },
      calendar: {
        component: Calendar
      },
      grid: {
        component: Grid
      },
      message: {
        component: Message
      },
      person: {
        component: Person
      },
      settings: {
        component: Settings
      },
      power: {
        component: Power
      },
      search: {
        component: Search
      },
      mic: {
        component: Mic
      },
      fileText: {
        component: FileText
      },
      image: {
        component: Image
      }
    }
  }
};
