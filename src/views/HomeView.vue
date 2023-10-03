<template>
    <div>
      <UserList />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import UserList from '@/components/UserList.vue';
  
  export default defineComponent({
    name: 'HomeView',
    components: {
      UserList,
    },
  });
  </script>
  