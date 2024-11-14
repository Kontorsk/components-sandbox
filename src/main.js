import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from './TheHeader'
import './theme.css'


// App -> AppNews -> AppNewsList
// вместо верхней схемы можем по App -> AppNewsList

const app = createApp(App)

// global registration
app.component('the-header', TheHeader)

app.mount('#app')
