<template>
  <div>
    <h2>{{userStore.body}}</h2>    
    <h2>Body</h2>
    <h2>{{userStore.footer}}</h2>
  </div>
</template>

<script setup>
import { useUserStore } from '../store/userstore'; 
import Profile from './profile.vue';

const userStore = useUserStore(); 
</script>
