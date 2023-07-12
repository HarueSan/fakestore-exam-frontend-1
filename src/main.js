import { createApp } from "vue";
import App from "./App.vue";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as labsComponents from "vuetify/labs/components";
import * as directives from "vuetify/directives";
import axios from "axios";
import VueAxios from "vue-axios";
import colors from "vuetify/lib/util/colors";

import store from "./store";
import router from "./router";
import appConfig from "./appConfig";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
  },
  components: {
    ...components,
    ...labsComponents,
  },
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.red.darken1,
          secondary: colors.red.lighten4, 
        },
      },
    },
  },
});
const app = createApp(App);

app.use(vuetify);
app.use(store);
app.use(router);

//defined Base URL
axios.defaults.baseURL = appConfig.apiUrl;
app.use(VueAxios, axios);

app.mount("#app");
