import { createApp } from 'vue'
import App from './App.vue'
import '@/components/UI'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from "@/router/router";

// import vuetify from "vue-cli-plugin-vuetify/generator/templates/v3/src/plugins/vuetify";

const app = createApp(App)
//
// const vuetify = createVuetify({
//     components,
//     directives,
// })

app
    .use(router)
    .mount('#app')
