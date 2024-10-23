<template>
  <div>
    <h1>{{ userStore.header }}</h1>
    <Profile />
  </div>
</template>

<script setup>
import { useUserStore } from '../store/userstore'; 
import Profile from './profile.vue';

const userStore = useUserStore(); 
</script>
