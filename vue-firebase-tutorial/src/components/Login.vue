<template>
    <div class="login">
      <h3>Login</h3>
      <input type="email" v-model="email" placeholder="email"><br>
      <input type="password" v-model="password" placeholder="password"><br>
      <button v-on:click="login">로그인</button>
      <p>만약 계정이 없다면, <router-link to="/signup">회원가입</router-link>을 먼저 진행해주세요!</p>
    </div>
  </template>
  
  <script>
  import firebase from 'firebase'
  
    export default {
      name: 'login',
      data() {
        return {
          email: '',
          password: ''
        }
      },
      methods: {
        login() {
          //this.$router.replace('hello')
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
            function(user) {
              alert('로그인 완료!')                         
            },
            function(err) {
              alert('에러 : ' + err.message)
            }
          );
        }
      }
    }
  </script>
  
  <style scoped>
    .login {
      margin-top: 40px;
    }
    input {
      margin: 10px 0;
      width: 20%;
      padding: 15px;
    }
    button {
      margin-top: 20px;
      width: 10%;
      cursor: pointer;
    }
    p {
      margin-top: 40px;
      font-size: 15px;
    }
    p a {
      text-decoration: underline;
      cursor: pointer;
    }
  </style>