import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Asegúrate de que esta importación sea correcta
import { setupApp } from './pinia';

const app = createApp(App);

setupApp(app);

app.use(router);

app.mount('#app');
