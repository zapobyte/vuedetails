import type { App } from 'vue';
import Vue3Details from './components';

export default {
  install: (app: App) => {
    app.component('vue3details', Vue3Details);
  }
};

export { Vue3Details };