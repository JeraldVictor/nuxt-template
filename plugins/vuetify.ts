import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "dark",
    },
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
  });
  app.vueApp.use(vuetify);
});
