<template>
    <div class="user-details">
      <h3>{{ user.first_name }} {{ user.last_name }}</h3>
      <p>{{ user.email }}</p>
      <img :src="user.avatar" :alt="user.first_name" />
    </div>
  </template>
  
  <script>
  import { defineComponent, computed } from 'vue';
  import { useUserStore } from '@/store';
  import { useRoute } from 'vue-router';
  
  export default defineComponent({
    name: 'UserDetails',
    setup() {
      const userStore = useUserStore();
      const route = useRoute();
  
      const userId = Number(route.params.id);
      const user = computed(() => userStore.getUserById(userId));
  
      return {
        user,
      };
    },
  });
  </script>
  
  <style scoped>
  .user-details {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .user-details h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .user-details img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  </style>
  