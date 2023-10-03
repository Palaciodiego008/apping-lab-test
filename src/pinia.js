import { createPinia } from 'pinia';

export const pinia = createPinia();

// Automatically install Pinia on the app
export function setupApp(app) {
  app.use(pinia);
}
