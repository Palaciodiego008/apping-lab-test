import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userList: [],
    loading: false,
  }),
  actions: {
    async fetchUsers(page) {
      this.loading = true;
      try {
        const response = await fetch(`https://reqres.in/api/users?page=${page}`);
        const data = await response.json();
        this.userList = [...data.data];
        console.log('Users fetched:', data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    getUserById: (state) => (id) => {
      return state.userList.find((user) => user.id === id);
    },
  },
});
