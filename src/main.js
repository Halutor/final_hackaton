import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';
import config from './config.js';

createApp(App).use(store).use(router).mount('#app');

let app = firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
    
     console.log(user)
   })