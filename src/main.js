import './assets/css/reset.css'
import './assets/css/header.css'
import './assets/css/footer.css'
import './assets/css/style.css'
import './assets/css/about-company.css'
import './assets/css/location.css'
import './assets/css/appartment.css'
import './assets/css/advantages.css'
import './assets/css/progress.css'
import './assets/css/base-block.css'
import './assets/css/halls-block.css'
import './assets/css/landscaping.css'
import './assets/css/choosehome.css'
import './assets/css/back-call.css'
import './assets/css/business.css'
import './assets/css/sdetails.css'
import './assets/css/transition.css'
import './assets/css/adaptive.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
