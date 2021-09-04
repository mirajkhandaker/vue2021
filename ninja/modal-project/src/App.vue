<template>
  <h1>{{title}}</h1>
  <p>Welcome...</p>

  <teleport to="#modals" v-if="showModal">
    <Modal theme="sale" @close="toogleModal">
      <h1>{{header}}</h1>
      <p>{{text}}</p>
      <template v-slot:links="links">
        <a href="#">Sign Up</a>
        <a href="#">Sign In</a>
      </template>
    </Modal>
  </teleport>

  <div v-if="showModal2">
    <Modal theme="sale2" @close="toogleModal2">
      <h1>{{header}} 2</h1>
      <p>{{text}} 2</p>
      <template v-slot:links="links">
        <a href="#">Register</a>
        <a href="#">Log In</a>
      </template>
    </Modal>
  </div>

  <button @click="toogleModal">Open Modal1</button>
  <button @click="toogleModal2">Open Modal2</button>
</template>

<script>
import Modal from './components/Modal';
export default {
  name: 'App',
  components:{ Modal },
  data(){
    return {
      title: "My first vue app",
      header: "Sign up for giveaway",
      text: "Grab your ninja swag for half price",
      showModal:false,
      showModal2:false,
    }
  },
  methods:{
    toogleModal(){
      this.showModal = !this.showModal
    },
    toogleModal2(){
      this.showModal2 = !this.showModal2
    }
  }
}
</script>

<style>
#app,#modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
