import './style.css'
import { createHead } from '@vueuse/head'



import Layout from './Layout.vue'

export default {
  Layout,
  enhanceApp({app}){
    const head = createHead();
    app.use(head);
  }
}
