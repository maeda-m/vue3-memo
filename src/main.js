import { createApp } from "vue";
import App from "./App.vue";
import { Inkline, components } from "@inkline/inkline";

import "@inkline/inkline/inkline.scss";

const app = createApp(App);
app.use(Inkline, { components });
app.mount("#app");
