import { createApp } from "vue";
import router from './router/router'
import './style.css'
import 'virtual:uno.css'
import App from "./App.vue";
// import logui from "@logui/components"
const app = createApp(App);
// app.use(logui)
app.use(router).mount("#app")
