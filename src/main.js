import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import chart from "@/components/svg/chart.vue"

const app = createApp(App)

app.component(
  'chart',
  chart
)

app.mount('#app')
