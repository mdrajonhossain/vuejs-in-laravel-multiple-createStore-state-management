<template>
  <div>
    <h2>{{userStore.header}}</h2>    
    sadfasdfasdf
    <router-link to="/">Home</router-link>
  </div>
</template>

<script setup>
import { useUserStore } from '../store/userstore'; 
import Profile from './profile.vue';

const userStore = useUserStore(); 
</script>
