import {createApp} from 'vue'
import App from './App.vue'
import chart from "@/components/svg/chart.vue"

const app = createApp(App)

app.use(chart)

app.mount('#app')
