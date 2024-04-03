import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDccf-57FymCHOJUjCr0hwzJUkatdOH1tc",
  authDomain: "syu2024-capstone.firebaseapp.com",
  projectId: "syu2024-capstone",
  storageBucket: "syu2024-capstone.appspot.com",
  messagingSenderId: "403723309000",
  appId: "1:403723309000:web:da83c38f3ab4a872bcbafd"
}

firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})