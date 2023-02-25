import type { App } from 'vue';
import VueDetails from './components';

export default {
  install: (app: App) => {
    app.component('vue-details', VueDetails);
  }
};

export { VueDetails };