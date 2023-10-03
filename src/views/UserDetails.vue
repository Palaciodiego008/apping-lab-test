<template>
  <div>
    <UserDetails />
  </div>
</template>
  
<script>
import { defineComponent } from 'vue';
import UserDetails from '@/components/UserDetails.vue';

export default defineComponent({
  name: 'UserDetailsPage',
  components: {
    UserDetails,
  },
});
</script>
  