import { createApp } from "vue";
import App from "./App.vue";
import logui from "@logui/components"
const app = createApp(App);
app.use(logui)
app.mount("#app")
