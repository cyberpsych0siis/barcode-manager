import { store } from './stores/store';
// import { VueMaterial } from 'vue-material';
// import 'vue-material/dist/vue-material.min.css'
import { createApp } from 'vue'
// import Vue from 'vue';
import App from './App.vue'

// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

const app = createApp(App);
// Vue.use(VueMaterial);
app.use(store);
app.mount('#app')
