<template>
    <div class="user-list">
      <h2>Lista de Usuarios</h2>
      <div v-if="loading" class="spinner"></div>
      <ul v-else-if="userList.length > 0">
        <li v-for="user in userList" :key="user.id">
          <router-link :to="'/user/' + user.id">
            <div class="user-item">
              <img :src="user.avatar" :alt="user.first_name" />
              <div>
                <h3>{{ user.first_name }} {{ user.last_name }}</h3>
                <p>{{ user.email }}</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <div v-else>
        <p>No se han encontrado usuarios.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, onMounted, ref } from 'vue';
  import { useUserStore } from '@/store';
  
  export default defineComponent({
    name: 'UserList',
    setup() {
      const userStore = useUserStore();
      const loading = ref(true); // Inicialmente, establece loading en true
      const userList = ref([]);
  
      onMounted(async () => {
        try {
          await userStore.fetchUsers();
          setTimeout(() => {
            userList.value = userStore.userList;
            loading.value = false;
          }, 500);
        } catch (error) {
          console.error('Error fetching users:', error);
          loading.value = false;
        }
      });
  
      return {
        userList,
        loading,
      };
    },
  });
  </script>
  
  <style scoped>
  .user-list {
    margin: 20px;
  }
  
  .user-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .user-item img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
  }
  
  .spinner {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top: 4px solid #3498db;
    width: 30px;
    height: 30px;
    animation: spin 2s linear infinite; /* Ajusta la duración de la animación según sea necesario */
    margin: 20px auto;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  </style>
  