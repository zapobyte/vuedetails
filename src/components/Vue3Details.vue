<template>
  <details id="vue3details" :open="isOpen" @click="toggleElement">
    <slot></slot>
  </details>
</template>

<script lang="ts">
import { ref, computed, PropType, defineComponent  } from 'vue';

export default defineComponent({
  name: 'Vue3Details',
  props:{
    open: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ['open'],
  setup(props, { emit }) {
    const openProp = ref<boolean>(props.open);

    const isOpen = computed((): boolean => {
      return openProp.value;
    });

    const toggleElement = (): void => {
      openProp.value = !openProp.value;
      emit('open', isOpen.value);
    };

    return {
      isOpen,
      toggleElement
    }
  }
})
</script>

<style scoped>
</style>
