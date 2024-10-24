<template>
  <div>
    <h2>{{userStore.body}}</h2>    
    Home
    <router-link to="/profile">Profile</router-link>
  </div>
</template>

<script setup>
import { useUserStore } from '../store/userstore'; 
import Profile from './profile.vue';

const userStore = useUserStore(); 
</script>
