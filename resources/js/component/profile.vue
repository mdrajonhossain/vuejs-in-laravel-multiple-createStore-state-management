<template>
  <div>
    <h2>{{userStore.header}}</h2>    
    sadfasdfasdf
    <router-link to="/">Home</router-link>
    <button @click="()=>userStore.adme('header test')">eOneClick</button>

  </div>
</template>




<script setup>
import { useUserStore } from '../store/userstore'; 

const userStore = useUserStore(); 
</script>
